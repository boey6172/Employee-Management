const express = require('express');
const router = express.Router(); 
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Donors, Users,Gender,Ranks,RegionAssignments,Religions,TaxStatuses,Attachments,DocumentTypes,Level,Status} = require ("../models");
const bcrypt = require("bcrypt");
const e = require('express');
const multer = require('multer')
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');


 
router.get("/", async(req,res) =>{
    try{
        const listofDonors =  await Donors.findAll({
            include:[Status,Level]
        })
        res.json(listofDonors)
    }catch (error) {
        console.log(error)
    }
});

router.post("/getdonor", async(req,res) =>{
    const {id} = req.body
    try{
    const donor =  await Donors.findOne({where:{
                id:id
            }, 
            include:[Status,Level,]
           
        }
    )

    let data = {
        donor
        }

    if (!donor){
        data={
            message:"Donor Not Found"
        }
        res.json(data)

    }   
    res.json(data)
    }
    catch(e){
        console.log(e)
    }
});

router.post("/getProfile", async(req,res) =>{
    const {id} = req.body
    try{
    const donor =  await Donors.findOne({where:{
                id:id
            }, 
            include:[Status,Level,]
           
        }
    )
    const user =  await Users.findOne({where:{
            donor:id
        },    
    }
)
    let data = {
        donor
        ,user
        }

    if (!donor){
        data={
            message:"Donor Not Found"
        }
        res.json(data)

    }   
    res.json(data)
    }
    catch(e){
        console.log(e)
    }
});

router.post("/confirmdonor", async(req,res) =>{
    const {id} = req.body
    try{
        const donor =  await Donors.findOne({where:{
                    id:id
                }, 
                include:[Status,Level]
            
            }
        )
        let data = {}   

        if (donor){
            data.message = "Donor Exists"
            data.donor = donor
        }
        else{
            data.message = "Donor Does not exist"
            data.donor = {}
        }


        res.json(data)
        
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
router.post("/getdonorsbyreferral", async(req,res) =>{
    const {id} = req.body
    try {
        const donors =  await Donors.findAll( {where: {
            refferalId : id
          }
        })
        res.json(donors)
        
    } catch (error) {
        console.log(error)
    }

});



router.post("/register", async(req,res) =>{

    const {password,email,contactNumber,firstName,middleName,lastName,depositId,bankAccountNumber,philhealthId,referalID,MOD,suffix,amount} = req.body
    const role = "d0eff7f7-2740-44ca-850f-836eb28093e6";
    const level = "0668b972-1aba-4ce1-b893-868fda9da679";
    const status ="a587fb85-2851-4fc9-aaec-0c1088b600b6";
    try {
        const user = await Users.findOne({
            where: {username:email}
        })
        if (user) res.json({error:"Account username already exist"})
        if (!user){
            const data = await Donors.create({
                firstname: firstName,                                                                                                                                              
                middlename: middleName,
                lastname: lastName,
                suffix:suffix ? suffix :'',
                refferalId:referalID,
                contactNumber:contactNumber,
                depositSlip:depositId,
                bankAccount:bankAccountNumber,
                philId: philhealthId,
                level:level,
                status:status,
                M_O_D:MOD,
                amount:amount
            });
            bcrypt.hash(password, 10).then((hash) =>{
                Users.create({
                    username:email,
                    password:hash,
                    donor:data.id,
                    firstname: firstName,
                    middlename: middleName,
                    lastname: lastName,
                    role:role,
                    email:email,
                    contact_no:contactNumber
                })
            })
            res.json(data);
            const options = { 
                to:email,
                subject:'Holy Cross Account Successfully Created',
                text:`Verification of your Donation is within 3-5 days`+ `</br>` +`Once verified, an auto-generated message via email will come from Holy Cross Xp`,
            }
            sendMail(options)
        }
    } catch (error) {
        res.json(error)
    }
});


router.post("/admin", async(req,res) =>{
    const employee = req.body
//  console.log(employee)
    res.json(employee);
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



router.post("/uploadDepositSlip", async(req,res) =>{
    const data = req.donor;
    const donor = data;
    // const {employee, documentType} = data;
    console.log(data)
    try{
         upload(req,res, async function(err){   
            if(err){
            res.json({success:false,message:err});        
            }         
            else{
                const path = req.file.path

                await Donors.update({
                    depositfile:path,
            
                },{
                    where:{
                        id:req.body.donor
                    }
                });
                    res.status(200).send(req.body.donor);

                // res.json({success:true,message:"Data and File was updated !"});
            } 
        });

    }catch(e){
        console.log(e)
    }
});

router.post("/uploadValidId", async(req,res) =>{
    const data = req.body;
    const {donor} = data;
    // const {employee, documentType} = data;
    try{
         upload(req,res, async function(err){   
            if(err){
            res.json({success:false,message:err});        
            }         
            else{
                const path = req.file.path

                await Donors.update({
                    validIdFile:path,
            
                },{
                    where:{
                        id:req.body.donor
                    }
                });
                    res.status(200).send("Success");

                // res.json({success:true,message:"Data and File was updated !"});
            } 
        });

    }catch(e){
        console.log(e)
    }
});



router.post("/attachments", async(req,res) =>{
    const data = req.body;
    const {id} = data;

    const attachments = await Attachments.findAll({
        where:{
            employee:id
        },include:[DocumentTypes]
    });
    res.json(attachments);
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


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: '10000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif|pdf/
        const mimeType = fileTypes.test(file.mimetype)  
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
         cb('Give proper files formate to upload')
    }
}).single('file')

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'hospholycross@gmail.com',  // Replace with your Gmail email address
      pass: 'rpmgcfqadnkaihth',   // Replace with your Gmail password
    },
  });
  
// router.get('/send-email', async (req, res) => {
async function sendMail(options)  {
    const { to, subject, text } = options;

    const mailOptions = {
        from: 'hospholycross@gmail.com',  // Replace with your Gmail email address
        to:to,
        subject:subject,
        text:text,
    };
    
    try {
        await transporter.sendMail(mailOptions);
        // res.send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        // res.send('Error sending email');
    }
}

// });



module.exports = router;