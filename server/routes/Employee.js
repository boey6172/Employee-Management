const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Employees, Users,Gender,Ranks,RegionAssignments,Religions,TaxStatuses} = require ("../models");
const bcrypt = require("bcrypt");
const e = require('express');


 
router.get("/", async(req,res) =>{
    try{
        const listofEmployee =  await Employees.findAll({
            include:[Gender,Ranks,RegionAssignments,Religions,TaxStatuses]
        })
        res.json(listofEmployee)
    }catch (error) {
        console.log(error)
    }
});

router.post("/getemployee", async(req,res) =>{
    const {id} = req.body
    try{
    const employee =  await Employees.findOne({where:{
                id:id
            }, include:[Gender,Ranks,RegionAssignments,Religions,TaxStatuses]
           
        }
    )
    res.json(employee)
    }
    catch(e){
        console.log(e)
    }
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
//  console.log(employee)
//     res.json(employee);
// res.json("yehey")
    const {username,password,email,contactNumber} = req.body
    const role = "d0eff7f7-2740-44ca-850f-836eb28093e6";
    try {
        const user = await Users.findOne({
            where: {username:username}
        })
        if (user) res.json({error:"Account username already exist"})
        const data = await Employees.create(employee);
        bcrypt.hash(password, 10).then((hash) =>{
            Users.create({
                username:username,
                password:hash,
                employee:data.id,
                role:role,
                email:email,
                contact_no:contactNumber
            })
        })
        res.json("User Created");
        
        
    } catch (error) {
        res.json(error)
    }
});
router.post("/admin", async(req,res) =>{
    const employee = req.body
//  console.log(employee)
//     res.json(employee);
// res.json("yehey")
    const {username,password,email,contactNumber} = req.body
    const role = "c9cb1a54-3c62-4976-977f-5a1b5a8e494c";
    try {
        const user = await Users.findOne({
            where: {username:username}
        })
        if (user) res.json({error:"Account username already exist"})
        const data = await Employees.create(employee);
        bcrypt.hash(password, 10).then((hash) =>{
            Users.create({
                username:username,
                password:hash,
                employee:data.id,
                role:role,
                email:email,
                contact_no:contactNumber
            })
        })
        res.json("User Created");
        
        
    } catch (error) {
        res.json(error)
    }


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


router.post("/govtInfo", async(req,res) =>{
    const {id, philNumber, pagIbigNumber,
        gsisNumber,nhmcNumber,tinNumber,
    } = req.body
    await Employees.update({
 
        philNumber:philNumber,
        gsisNumber:gsisNumber,
        nhmcNumber:nhmcNumber,
        tinNumber:tinNumber,
        pagIbigNumber:pagIbigNumber,


    },{
        where:{
            id:id
        }
    });
    res.json(req.body);
});

router.post("/getAccountInfo", async(req,res) =>{
    const {id} = req.body
    try{
    const accountInfo =  await Users.findOne({
            attributes:['email','username'],
            where:{
                    employee:id
                },      
        }
    )
    res.json(accountInfo)
    }
    catch(e){
        console.log(e)
    }
});

router.post("/getEmpCount", async(req,res) =>{
    // const {id} = req.body
    try{
    const empCount =  await Users.findAll({
            attributes:[
                [Sequelize.fn('COUNT', Sequelize.col('id')), 'emp_count']
            ],
            // where:{
            //         employee:id
            //     },      
        }
    )
    res.json(empCount)
    }
    catch(e){
        console.log(e)
    }
});

// router.post("/getEmpCount", async(req,res) =>{
//     // const {id} = req.body
//     try{
//     const empCount =  await Users.findAll({
//             attributes:[
//                 [Sequelize.fn('MONTH', Sequelize.col('id')), 'emp_count']
//             ],
//             // where:{
//             //         employee:id
//             //     },      
//         }
//     )
//     res.json(empCount)
//     }
//     catch(e){
//         console.log(e)
//     }
// });








module.exports = router;