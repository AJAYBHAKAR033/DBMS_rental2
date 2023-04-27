const express=require('express');
const router=express.Router();

const SeePropClient_controller=require('../Controller/SeePropertyController')

//Friends
router.route('/')
    .post(SeePropClient_controller.SeeProperty)
    
module.exports=router;