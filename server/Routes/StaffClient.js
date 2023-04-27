const express=require('express');
const router=express.Router();

const StaffClientController=require('../Controller/StaffClientController')

//Friends
router.route('/')
    .post(StaffClientController.StaffClient)
    
module.exports=router;