//routes/auth.js
const express = require('express');
const routeur  = express.Router();
const jwt = require('jsonwebtoken');
const passport = require("passport");
/* POST login. */
routeur.post('/signin', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            console.log(err, user);
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           return res.redirect("http://localhost:3000");
        });
    })(req, res);
});
module.exports = routeur