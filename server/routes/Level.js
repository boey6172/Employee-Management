const express = require('express');
const router = express.Router(); 
const {Level} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');

 
router.get("/", async(req,res) =>{
    const listoflevel =  await Level.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listoflevel)
});

router.get("/getlevel", async(req,res) =>{
    const listoflevel =  await Level.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listoflevel)
});


router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const level =  await Level.findByPk(id)
    res.json(level)
});

router.post("/searchlevel", async(req,res) =>{
    const {value} = req.body
    try {
        const level =  await Level.findAll( {where: {
            level: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(level)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", validateToken, async(req,res) =>{
    const data = req.body
    const {level} = data
    try{

        const count = await Level.findOne({
            where:{ 
                level: level
            }
        })

        if (count) res.json({error:"level Already exist"})
        
        await Level.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   
    
});

router.post("/update", validateToken, async(req,res) =>{
    const {id, level} = req.body

    try{
        const count = await Level.findOne({
            where:{ 
                level: level
            }
        })

        if (count) res.json({error:"level Already exist"})
        
        await Level.update({level:level},{
            where:{
                id:id
            }
        });
        res.json(level);
    }
    catch(error){
        res.json(error);
    }
    

});

router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Level.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});





module.exports = router;