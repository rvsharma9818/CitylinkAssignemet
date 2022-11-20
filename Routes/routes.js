const express = require('express')
const router = express.Router();
const { createUser,vendorcreate,createbooking,getbookingdetails} =require('../Controller/controller')


router.route('/create').post(createUser);

router.route('/createvendor').post(vendorcreate);

router.route('/createbooking').post(createbooking);

router.route('/getdetails').get(getbookingdetails);


module.exports=router