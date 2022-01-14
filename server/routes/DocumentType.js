const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
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

router.post("/update", async(req,res) =>{
    const {id, documentType} = req.body
    await DocumentTypes.update({documentType:documentType},{
        where:{
            id:id
        }
    });
    res.json(DocumentTypes);
});

router.post("/searchdocumenttype", async(req,res) =>{
    const {value} = req.body
    try {
        const docType =  await DocumentTypes.findAll( {where: {
            documentType: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(docType)
        
    } catch (error) {
        console.log(error)
    }

});





module.exports = router;