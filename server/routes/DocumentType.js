const express = require('express');
const router = express.Router(); 
const {DocumentType} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofdocumentType =  await DocumentType.findAll()
    res.json(listofdocumentType)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const documentType =  await DocumentType.findByPk(id)
    res.json(documentType)
});


router.post("/", async(req,res) =>{
    const documentType = req.body
    await DocumentType.create(documentType);
    res.json(documentType);
});




module.exports = router;