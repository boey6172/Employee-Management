const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const {Donors, ReferralBonuses,TotalReferralBonuses} = require ("../models");
const Op = Sequelize.Op;



router.post("/calculateBonuses", async(req,res) =>{
   

   res.json(saveReferralBonuses('2024-03-25', '2025-10-13'))

});

router.get('/referral-bonuses', async (req, res) => {
  try {
      const { donorId } = req.query;
      let referralBonuses;

      if (donorId) {
          referralBonuses = await ReferralBonuses.findAll({ where: { donorId } });
      } else {
          referralBonuses = await ReferralBonuses.findAll();
      }

      res.json(referralBonuses);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});

const saveReferralBonuses = async (startDate, endDate) => {
  // Track already processed donors to prevent duplicate calculations
  const processedDonors = new Set();

  // Fetch all donors and their downlines within the verified date range
  const donors = await Donors.findAll({
      where: {
          isVerified: true,
          isValidated: true,
          status: {
            [Op.or]: ["d35932f3-5cf8-4ce1-8bed-ca0faa7db726", "e93b78ed-ed32-4a69-880b-e8545b8ae067"], // Add your specific status conditions here
          },
          verifiedDate: {
              [Op.between]: [startDate, endDate],
          },
      },
      include: [
          {
              model: Donors,
              as: 'downlines',
              hierarchy: true, // Recursive fetch for all levels
              where: {
                  isVerified: true,
                  isValidated: true,
                  verifiedDate: {
                      [Op.between]: [startDate, endDate],
                  },
                  status: {
                    [Op.or]: ["d35932f3-5cf8-4ce1-8bed-ca0faa7db726", "e93b78ed-ed32-4a69-880b-e8545b8ae067"], // Add your specific status conditions here
                  },
              },
          },
      ],
  });

  let totalBonus = 0;
  let totalCount = 0;

  // Save the total referral bonuses and the total count
  const totalReferralBonus = await TotalReferralBonuses.create({
      totalBonus: 0,
      totalCount: 0,
      createdAt: new Date(),
  });

  for (const donor of donors) {
      // Check if this donor's referral bonus was already saved
      const existingBonus = await ReferralBonuses.findOne({
          where: { donorId: donor.id }
      });

      if (existingBonus) {
          console.log(`Skipping donor ${donor.id}, already saved.`);
          continue; // Skip if already saved
      }

      // Process referral bonuses only for new donors
      const downlineDetails = [];
      const bonus = calculateBonus(donor.downlines, downlineDetails, 1);

      totalBonus += bonus;
      totalCount += 1;

      if (bonus > 0) {
          await ReferralBonuses.create({
              donorId: donor.id,
              donorName: `${donor.firstname} ${donor.lastname}`,
              bonus,
              totalReferralBonusId: totalReferralBonus.id,
              downlineDetails, // Save JSON details about downlines
          });

          // Mark donor as processed
          processedDonors.add(donor.id);
      }
  }

  await totalReferralBonus.update({
    totalBonus: totalBonus,
    totalCount: totalCount,
});

  return 'Referral bonuses saved successfully!';
};

// Recursive function to calculate bonuses
const calculateBonus = (downlines, downlineDetails, currentLevel = 1) => {
  if (currentLevel >= 8) return 0; // Stop at level 7

  let bonus = 0;
  const levelBonus = { 1: 1000, 2: 250, 3: 250, 4: 250, 5: 250, 6: 250, 7: 250 };

  downlines.forEach(downline => {
      // Calculate bonus based on the level
      const currentBonus = levelBonus[currentLevel] || 0;
      bonus += currentBonus;

      downlineDetails.push({
          downlineId: downline.id,
          downlineName: `${downline.firstname} ${downline.lastname}`,
          level: currentLevel,
          levelValue: currentBonus,
      });

      if (downline.downlines && downline.downlines.length > 0) {
          bonus += calculateBonus(downline.downlines, downlineDetails, currentLevel + 1);
      }
  });

  return bonus;
};



module.exports = router;