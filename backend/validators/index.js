const { validationResult } = require('express-validator');    //  

exports.runValidation = (req, res, next) => { // next is a callback function 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ error: errors.array()[0].msg });
    }
    next(); // excute call back so that our application does not get hot
};