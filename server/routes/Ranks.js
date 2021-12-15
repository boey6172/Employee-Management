const express = require('express');
const router = express.Router(); 
const {Ranks} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
 
router.get("/", async(req,res) =>{
    const listofrank =  await Ranks.findAll()
    res.json(listofrank)
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const rank =  await Ranks.findByPk(id)
    res.json(rank)
});

router.post("/searchrank", async(req,res) =>{
    const {value} = req.body
    try {
        const rank =  await Ranks.findAll( {where: {
            rank: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(rank)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", async(req,res) =>{
    const rank = req.body
    await Ranks.create(rank);
    res.json(rank);
});




module.exports = router;