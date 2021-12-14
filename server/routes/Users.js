const express = require('express');
const router = express.Router(); 
const {Users} = require ("../models");
const bcrypt = require("bcrypt")

const {sign} = require("jsonwebtoken")


router.get("/:postId", async(req,res) =>{
    const postId = req.params.postId
    const users =  await Users.findAll({
        // where: {PostId: postId}
    })
    res.json(users)
});

router.post("/", async(req,res) =>{
    const {username,password} = req.body
    bcrypt.hash(password, 10).then((hash) =>{
        Users.create({
            username:username,
            password:hash
        })
    })
    res.json("yehey");
});

router.post("/login",async(req,res) => { 
    const {username,password} = req.body;

    const user = await Users.findOne({
        where: {username:username}
    })
    if (!user) res.json({error:"Account does not exist"})

    bcrypt.compare(password, user.password).then((match)=>{
        if(!match) res.json({error:" Wrong Username and Password"})

        const accessToken = sign({username:user.username,id:user.id},
            "testing"
        )

        res.json(accessToken);
    })
})





module.exports = router;