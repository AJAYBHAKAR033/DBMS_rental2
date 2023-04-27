const express=require('express');
const router=express.Router();

const ClientLoginController=require('../Controller/ClientLoginController')

//Friends
router.route('/')
    .post(ClientLoginController.ClientLogin)
    
module.exports=router;