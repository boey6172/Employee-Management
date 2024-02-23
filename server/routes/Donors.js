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

router.get("/forVerification", async(req,res) =>{
    const status ="a587fb85-2851-4fc9-aaec-0c1088b600b6";
    try{
        const listofDonors =  await Donors.findAll({where:{
            status:status
        }, 
            include:[Status,Level]
        })
        res.json(listofDonors)
    }catch (error) {
        console.log(error)
    }
});
router.get("/forValidation", async(req,res) =>{
    const status ="be56bb08-711f-4195-b0b4-4def08a09723";
    try{
        const listofDonors =  await Donors.findAll({where:{
            status:status
        }, 
            include:[Status,Level]
        })
        res.json(listofDonors)
    }catch (error) {
        console.log(error)
    }
});

router.get("/forVerificationDonorSolicitor", async(req,res) =>{
    const status ="e93b78ed-ed32-4a69-880b-e8545b8ae067";

    try{
        const listofDonors =  await Donors.findAll({where:{
            bankfile:{
                [Sequelize.Op.ne]: !null
            },
            status:status,
            isVerifiedDonorSolicitor:null
        }, 
            include:[Status,Level]
        })
        res.json(listofDonors)
    }catch (error) {
        console.log(error)
    }
});

router.get("/forValidationDonorSolicitor", async(req,res) =>{
    const status ="e93b78ed-ed32-4a69-880b-e8545b8ae067";

    try{
        const listofDonors =  await Donors.findAll({where:{
            bankfile:{
                [Sequelize.Op.ne]: !null
            },
            status:status,
            isVerifiedDonorSolicitor:true
        }, 
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

    const {password,email,contactNumber,firstName,middleName,
        lastName,depositId,bankAccountNumber,philhealthId,gender,
        referalID,MOD,suffix,amount,address,street} = req.body
    const role = "d0eff7f7-2740-44ca-850f-836eb28093e6";
    const level = "0668b972-1aba-4ce1-b893-868fda9da679";
    const status ="a587fb85-2851-4fc9-aaec-0c1088b600b6";
    const completeAddress = `${address.present_address.region}` + ` ` + `${address.present_address.province}` + ` ` +
    `${address.present_address.municipality}` + ` ` + `${address.present_address.city}` + ` ` + `${street}`;
    console.log(completeAddress);
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
                amount:amount,
                gender:gender,
                address:completeAddress
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
                text:`Please Wait for your Donation to be Verified Once verified, an auto-generated message via email will come from Holy Cross Xp. Thank you for your Patience.`,
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


router.post("/verify", async(req,res) =>{
    const {id,verifyBy} = req.body;
    const today = new Date();
    const newStatus = "be56bb08-711f-4195-b0b4-4def08a09723";
    const formattedDate = today.toISOString().split('T')[0];
    try{
    await Donors.update({
        status:newStatus,
        verifedBy:verifyBy,
        isVerified:true,
        verifiedDate:formattedDate
    },{
        where:{
            id:id
        }
    });

    res.json(req.body);


    } catch (error) {
        res.json(error)
    }
});

router.post("/validatedonorsolicitor", async(req,res) =>{
    const {id,validateBy} = req.body;
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const newStatus = "d35932f3-5cf8-4ce1-8bed-ca0faa7db726";
    try{
    await Donors.update({
        verifedDonorSolicitorBy:validateBy,
        isVerifiedDonorSolicitor:true,
        verifiedDonorSolicitorDate:formattedDate,
        status:newStatus,
    },{
        where:{
            id:id
        }
    });

    res.json("Donor Solicitor Account is Validated");


    } catch (error) {
        res.json(error)
    }
});

router.post("/verifydonorsolicitor", async(req,res) =>{
    const {id,verifyBy} = req.body;
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    try{
    await Donors.update({
        validatedDonorSolicitorBy:verifyBy,
        isValidatedDonorSolicitor:true,
        validatedDonorSolicitorDate:formattedDate
    },{
        where:{
            id:id
        }
    });

    res.json("Donor Solicitor Account is Verified");


    } catch (error) {
        res.json(error)
    }
});

router.post("/validate", async(req,res) =>{
    const {id,validateBy} = req.body;
    const today = new Date();

    const newStatus = "e93b78ed-ed32-4a69-880b-e8545b8ae067";
    const formattedDate = today.toISOString().split('T')[0];
    try {
    await Donors.update({
        status:newStatus,
        validatedBy:validateBy,
        isValidated:true,
        validatedDate:formattedDate
    },{
        where:{
            id:id
        }
    });
    
    
    res.json(req.body);
    const user = await Users.findOne({
        where: {donor:id}
    })

    const options = { 
        to:user.email,
        subject:'Holy Cross Account Verified and Validated',
        text:`${user.firstname}` + ` ` + `${user.middlename}` + ` ` + `${user.lastname}` + ` ` + `Your Donation is Verified.` + ` ` + `Thank you for your Donation.` +
        ` ` + `Your account is now a Verified Donor` 
    }
    sendMail(options)
    } catch (error) {
        res.json(error)
    }
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

router.post("/upgradeBankAccount", async(req,res) =>{
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
                    bankfile:path,
                    bankAccount:req.body.bankAccount
                },{
                    where:{
                        id:req.body.donor
                    }
                });
                    res.status(200).send("Success");

                // res.json({success:true,message:"Data and File was updated !"});
            } 
            const user = await Users.findOne({
                where: {donor:req.body.donor}
            })
            const options = { 
                to:user.email,
                subject:'Holy Cross Xp Account Upgrade',
                text:`Please Wait for your Bank Account to be Verified. Once verified, an auto-generated message via email will come from Holy Cross Xp. Thank you for your Patience.`,
            }
            sendMail(options)
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