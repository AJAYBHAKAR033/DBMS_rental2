const express=require('express');
const cookieParser = require('cookie-parser');

const router=express.Router();

const OwnerLoginController=require('../Controller/OwnerLoginController')

//Friends
router.route('/')
    .post(OwnerLoginController.OwnerLogin)
    
module.exports=router;