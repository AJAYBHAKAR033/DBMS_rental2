const express=require('express');
const router=express.Router();

const StaffPropertyController=require('../Controller/StaffPropertyController')

//Friends
router.route('/')
    .post(StaffPropertyController.StaffProperty)
    
module.exports=router;