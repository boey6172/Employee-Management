const express = require('express');
const router = express.Router(); 
const {Transactions,Donors,Users} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {validateToken} = require("../middleware/AuthMiddleware");
const moment = require('moment');


 
router.get("/", async(req,res) =>{
    const listOfTransaction =  await Transactions.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          },
          include:[Donors,Users]
        }
    )
    res.json(listOfTransaction)
});

router.get("/getrank", async(req,res) =>{
    const listofrank =  await Transactions.findAll(
        {where: {
            deleted_at:{
                [Op.not]: !null
            }
          },
  
        }
    )
    res.json(listofrank)
});


router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const transaction =  await Transactions.findByPk(id)
    res.json(transaction)
});

router.post("/searchrank", async(req,res) =>{
    const {value} = req.body
    try {
        const rank =  await Transactions.findAll( {where: {
            rank: {
              [Op.like]: '%'+value+'%'
            },
            deleted_at:{
                [Op.not]: !null
            }
          }
        })
        res.json(rank)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/createtransaction",
//  validateToken,
  async(req,res) =>{
    const data = req.body
    const {donor,updated_by,created_by} = data
    try{

        const today = new Date();
        // const formattedDate = today.toLocaleDateString('en-US');
        const formattedDate = today.toISOString().split('T')[0];
        const donorChar = donor.slice(-4)

        const count = await Transactions.count({
            where: {
                createdAt: {
                [Op.like]: '%'+formattedDate+'%'
              }
            },
          });
        let  counter = count + 1;

        const transaction = formattedDate + "-" + donorChar + "-" + counter;
        
        const saveData = {
            transaction:transaction,
            donor:donor,
            created_by:created_by,
            updated_by:updated_by
        }

        await Transactions.create(saveData);
        res.json(saveData);

       
    }catch(error) {
        res.json(error);
    }   
    
});

router.post("/updatetransaction", 
// validateToken,
 async(req,res) =>{
    const {id, amount} = req.body

    try{    
        const transaction = await Transactions.update({amount:amount},{
            where:{
                id:id
            }
        });
        res.json(transaction);
    }
    catch(error){
        res.json(error);
    }
    

});

router.post("/delete", validateToken, async(req,res) =>{
    const {id} = req.body;
    const date = moment().format('YYYY-DD-mm, h:mm:ss a');
    await Transactions.update({deleted_at:date},{
        where:{
            id:id
        }
    });
    res.json();
});





module.exports = router;