const express=require('express');
const router=express.Router();

const StaffLoginController=require('../Controller/StaffLoginController')

//Friends
router.route('/')
    .post(StaffLoginController.StaffLogin)
    
module.exports=router;