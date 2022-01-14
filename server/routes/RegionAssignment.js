const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {RegionAssignments} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofregion =  await RegionAssignments.findAll()
    res.json(listofregion)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const region =  await RegionAssignments.findByPk(id)
    res.json(region)
});


router.post("/", async(req,res) =>{
    const region = req.body
    await RegionAssignments.create(region);
    res.json(region);
});

router.post("/update", async(req,res) =>{
    const {id, regionAssignment} = req.body
    await RegionAssignments.update({regionAssignment:regionAssignment},{
        where:{
            id:id
        }
    });
    res.json(Religions);
});

router.post("/searchregion", async(req,res) =>{
    const {value} = req.body
    try {
        const region =  await RegionAssignments.findAll( {where: {
            regionAssignment: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(region)
        
    } catch (error) {
        console.log(error)
    }

});



module.exports = router;