const express = require('express');
const router = express.Router(); 
const {Users} = require ("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require("bcrypt")
const {sign} = require("jsonwebtoken")
const nodemailer = require('nodemailer');


router.get("/", async(req,res) =>{
    // const postId = req.params.postId
    const users =  await Users.findAll({
        // where: {PostId: postId}
    })
    res.json(users)
});

router.post("/", async(req,res) =>{
    const {username,password} = req.body
    try {
        const user = await Users.findOne({
            where: {username:username}
        })
        if (user) res.json({error:"Account username already exist"})

        bcrypt.hash(password, 10).then((hash) =>{
            Users.create({
                username:username,
                password:hash
            })
        })
        res.json("yehey");
        
        
    } catch (error) {
        console.log(error)
    }

});

router.post("/getuser", async(req,res) =>{
    const {id} = req.body
    try{
    const user =  await Users.findOne({where:{
                id:id
            }, 
            attributes:['email','firstName','lastName','middlename','suffix']
        }
    )

    let data = {
        user
        }

    if (!user){
        data={
            message:"User Not Found"
        }
        res.json(data)

    }   
    res.json(data)
    }
    catch(e){
        console.log(e)
    }
});


router.post("/createuser", async(req,res) =>{
    const {password,email,contactNumber,firstName,middleName,lastName} = req.body
    const role = "9e71956c-8cb4-4baa-bc7b-a614d8403c32";
try{
    bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            username:email,
            password:hash,
            firstname: firstName,
            middlename: middleName,
            lastname: lastName,
            role:role,
            email:email,
            contact_no:contactNumber
        })
    })
    res.json("User Created");
}catch(error){
    res.json(error)
}

});

router.post("/changePassword", async(req,res) =>{
    const {id,currentPassword, confirmPassword, newPassword} = req.body
    try {
        const user = await Users.findByPk(id)
        if (!user) {
            res.json({error:"Account does not exist"})
            return
        }
        if(newPassword !== confirmPassword) {
            res.json({error:" Confirm Password Does not Match"}) 
            return
        }
        
        bcrypt.compare(currentPassword, user.password).then((match)=>{
            if(!match) {
                res.json({error:" Old Password Does not Match"})
                return
            }
            // res.json(match)
            bcrypt.hash(newPassword, 10).then((hash) =>{
                Users.update({
                    password:hash,
                },{
                    where:{
                        id:id
                    }
                });
            })
            res.json("Password Has Been changed");
        })
        
        
    } catch (error) {
        console.log(error)
    }


});


router.post("/login",async(req,res) => { 
    const {email,password} = req.body;
    const user = await Users.findOne({
        where: {username:email}
    })
    
    if (!user) {
        res.json({error:"Account does not exist"})
        return
    }



    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) {
            res.json({error:" Wrong Username and Password"})
            return;
        }

        const accessToken = sign({username:email.username,id:user.id},
            "pbpbrns12301234",
            // {
            //     // expiresIn: 1,
            // }
        )
    const data = {
        token:'',
        user:{
            role:'',
            donor:''
        }
        
    }
        data.user.role = user.role
        data.token = accessToken
        data.user.donor = user.donor
        data.user.id = user.id
        res.send(data);
    })
});

router.post("/checkUsername",async(req,res) => { 
    const {username} = req.body;

    const user = await Users.findOne({
        where: {username:username}
    })
    if (user) res.json({error:"Account Username exist"})

});


const  generateTemporaryPassword = async() => {
    return Math.random().toString(36).slice(-8);
}

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

router.post("/forgotpassword",async(req,res) => { 
    const {email} = req.body;
    try{
        const existingUser = await Users.findOne({
            where: {username:email}
        })
        if (!existingUser){
            res.json({error:"Account Does Not Exist"})
        } 

        const temporaryPassword = await generateTemporaryPassword();
        console.log(temporaryPassword)
        bcrypt.hash(temporaryPassword, 10).then((hash) =>{
            existingUser.update({ password: hash});
        })
        
        const options = { 
            to:email,
            subject:'You have given a Temporary Password',
            text:`Here is your temporary password "` + temporaryPassword + `" Please Change your Password After Login `,
        }

        sendMail(options)

        res.json(`Your Temporary Password was sent on your Email Account `)

    }catch(error){
        console.error("Problem on Restting password",error.message);
        res.json({error:`Problem on Restting password,` + error.message})        
    }


});



module.exports = router;