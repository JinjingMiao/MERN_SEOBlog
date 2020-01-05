const express = require('express');
const router = express.Router();
// import
const { signup, signin ,signout, requireSignin} =require('../controllers/auth');

// validator
const{ runValidation } = require ('../validators');
const { userSignupValidator , userSigninValidator} = require('../validators/auth');

router.post('/signup', userSignupValidator, runValidation,signup);
router.post('/signin', userSigninValidator, runValidation,signin);
router.get('/signput',signout);

router.get('/secret',requireSignin,(req,res) => {
    res.json({
        message: 'you have access to secret page! see you again'

    })
})

module.exports = router;





// require express, reporter