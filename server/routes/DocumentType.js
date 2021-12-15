const express = require('express');
const router = express.Router(); 
const {DocumentTypes} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofdocumentType =  await DocumentTypes.findAll()
    res.json(listofdocumentType)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const documentType =  await DocumentTypes.findByPk(id)
    res.json(documentType)
});


router.post("/", async(req,res) =>{
    const documentType = req.body
    await DocumentTypes.create(documentType);
    res.json(documentType);
});




module.exports = router;