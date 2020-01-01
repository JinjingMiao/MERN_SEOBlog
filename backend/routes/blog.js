const express = require('express');
const router = express.Router();
// import
const { time } =require('../controllers/blog');
router.get('/', time);

module.exports = router;
// require express, reporter