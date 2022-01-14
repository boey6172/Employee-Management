const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Employees} = require ("../models");

 
router.get("/", async(req,res) =>{
    try{
        const listofEmployee =  await Employees.findAll()
        res.json(listofEmployee)
    }catch (error) {
        console.log(error)
    }
});

router.get("/byId/:id", async(req,res) =>{
    const id = req.params.id
    const employee =  await Employees.findByPk(id)
    res.json(employee)
});

router.post("/searchemployee", async(req,res) =>{
    const {value} = req.body
    try {
        const employee =  await Employees.findAll( {where: {
            rank: {
              [Op.like]: '%'+value+'%'
            }
          }
        })
        res.json(employee)
        
    } catch (error) {
        console.log(error)
    }

});


router.post("/", async(req,res) =>{
    const employee = req.body
    await Employees.create(employee);
    res.json(employee);
});

router.post("/update", async(req,res) =>{
    const {id, firstname,middlename,lastname,suffix,
        birthdate,gender,contact_no, address, employment_date, phil_no,   
        gsis_no,nhmc_acc_no,tin_no, tax_status, salary_grade
    } = req.body
    await Employees.update({
        firstname:firstname,
        middlename:middlename,
        lastname:lastname,
        suffix:suffix,
        birthdate:birthdate,
        gender:gender,
        contact_no:contact_no,
        address:address,
        employment_date:employment_date,
        phil_no:phil_no,
        gsis_no:gsis_no,
        nhmc_acc_no:nhmc_acc_no,
        tin_no:tin_no,
        tax_status:tax_status,
        salary_grade:salary_grade,

    },{
        where:{
            id:id
        }
    });
    res.json(req.body);
});






module.exports = router;