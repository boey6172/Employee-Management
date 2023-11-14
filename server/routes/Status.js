const express = require('express');
const router = express.Router(); 
const {Status} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');

 
router.get("/", async(req,res) =>{
    const listofstatus =  await Status.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofstatus)
});

router.get("/getstatus", async(req,res) =>{
    const listofstatus =  await Status.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          }
        }
    )
    res.json(listofstatus)
});


router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const status =  await Status.findByPk(id)
    res.json(status)
});

router.post("/searchstatus", async(req,res) =>{
    const {value} = req.body
    try {
        const status =  await Status.findAll( {where: {
            status: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(status)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", validateToken, async(req,res) =>{
    const data = req.body
    const {status} = data
    try{

        const count = await Status.findOne({
            where:{ 
                status: status
            }
        })

        if (count) res.json({error:"status Already exist"})
        
        await Status.create(data);
        res.json(data);

       
    }catch(error) {
        res.json(error);
    }   
    
});

router.post("/update", validateToken, async(req,res) =>{
    const {id, status} = req.body

    try{
        const count = await Status.findOne({
            where:{ 
                status: status
            }
        })

        if (count) res.json({error:"status Already exist"})
        
        await Status.update({status:status},{
            where:{
                id:id
            }
        });
        res.json(status);
    }
    catch(error){
        res.json(error);
    }
    

});

router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Status.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});





module.exports = router;