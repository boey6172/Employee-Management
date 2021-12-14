const express = require('express');
const router = express.Router(); 
const {Religion} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofreligion =  await Religion.findAll()
    res.json(listofreligion)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const religion =  await Religion.findByPk(id)
    res.json(religion)
});


router.post("/", async(req,res) =>{
    const religion = req.body
    await Religion.create(religion);
    res.json(religion);
});




module.exports = router;