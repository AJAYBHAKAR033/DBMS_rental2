const express=require('express');
const router=express.Router();

const CommentController=require('../Controller/CommentController')

//Friends
router.route('/')
    .post(CommentController.Comment)
    
module.exports=router;