const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const {Donors, ReferralBonuses} = require ("../models");
const Op = Sequelize.Op;



router.post("/calculateBonuses", async(req,res) =>{
   

   res.json(saveReferralBonuses('2024-03-25', '2025-10-12'))

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
    // Fetch all donors and their downlines within the verified date range
    const donors = await Donors.findAll({
      where: {
        isVerified: true,
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
            verifiedDate: {
              [Op.between]: [startDate, endDate],
            },
          },
        },
      ],
    });
  
    // Process and save referral bonuses for each donor
    for (const donor of donors) {
      const downlineDetails = [];
      const bonus = calculateBonus(donor.downlines, downlineDetails);
  
      // Save the referral bonus with downline details
      await ReferralBonuses.create({
        donorId: donor.id,
        donorName: `${donor.firstname} ${donor.lastname}`,
        bonus,
        downlineDetails, // Save JSON details about downlines
      });
    }
  
    return 'Referral bonuses saved successfully!';
  };
  
  // Recursive function to calculate bonuses and collect downline details
  const calculateBonus = (downlines, downlineDetails, currentLevel = 1) => {
    let bonus = 0;
  
    downlines.forEach(downline => {
      const levelBonus = {
        1: 100,  // Level 1 bonus
        2: 50,   // Level 2 bonus
        3: 25,   // Level 3 bonus
        // Extend for more levels as needed
      };
  
      // Calculate bonus based on the level
      const currentBonus = levelBonus[currentLevel] || 0;
      bonus += currentBonus;
  
      // Add the downline details (including level and bonus value)
      downlineDetails.push({
        downlineId: downline.id,
        downlineName: `${downline.firstname} ${downline.lastname}`,
        level: currentLevel,
        levelValue: currentBonus,
      });
  
      // Recursively calculate bonus for further downlines
      if (downline.downlines && downline.downlines.length > 0) {
        bonus += calculateBonus(downline.downlines, downlineDetails, currentLevel + 1);
      }
    });
  
    return bonus;
  };
  


module.exports = router;