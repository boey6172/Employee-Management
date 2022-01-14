const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Religions} = require ("../models");
 
router.get("/", async(req,res) =>{
    const listofreligion =  await Religions.findAll()
    res.json(listofreligion)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const religion =  await Religions.findByPk(id)
    res.json(religion)
});


router.post("/", async(req,res) =>{
    const religion = req.body
    await Religions.create(religion);
    res.json(religion);
});

router.post("/update", async(req,res) =>{
    const {id, religion} = req.body
    await Religions.update({religion:religion},{
        where:{
            id:id
        }
    });
    res.json(Religions);
});

router.post("/searchreligion", async(req,res) =>{
    const {value} = req.body
    try {
        const religion =  await Religions.findAll( {where: {
            religion: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(religion)
        
    } catch (error) {
        console.log(error)
    }

});



module.exports = router;