const express = require('express')
const routeur = express.Router()
const User = require('../modele/user')
const bcrypt = require('bcrypt')

routeur.post('/signup', (req, res) => { 
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.log("error when hashing the password")
        } else {
            const user = new User({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hash
            })
            user.save()
            .then((result) => {res.redirect("/signin")})
            .catch((err) => {res.status(400).json({message:"there is an error : " + err})})    
        }
    })
})

routeur.get('/signup', (req, res) => {
    res.render('signup')
})

module.exports = routeur