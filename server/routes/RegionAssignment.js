const express = require('express');
const router = express.Router(); 
const {RegioAssignment} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofregion =  await RegionAssignment.findAll()
    res.json(listofregion)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const region =  await RegionAssignment.findByPk(id)
    res.json(region)
});


router.post("/", async(req,res) =>{
    const region = req.body
    await RegionAssignment.create(religion);
    res.json(region);
});




module.exports = router;