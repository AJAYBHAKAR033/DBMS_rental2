const express=require('express');
const app=express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const bodyParser = require('body-parser');

//Db connection
const connectDb=require('./config/db')
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/branchForm',require('./Routes/BranchForm'));

//Admin Login
app.use('/adminLogin',require('./Routes/AdminLogin'));

//Client Login
app.use('/clientLogin',require('./Routes/ClientLogin'));

//Staff Login
app.use('/staffLogin',require('./Routes/StaffLogin'));

//Owner Login
app.use('/ownerLogin',require('./Routes/OwnerLogin'));

//See property by client
app.use('/seePropClient',require('./Routes/SeePropClient'));

//Add Staff
app.use('/addStaff',require('./Routes/AddEmploye'));

//Add Branch
app.use('/addBranch',require('./Routes/AddBranch'));

//Get Branches
app.use('/getBranches',require('./Routes/GetBranch'));

//Owner Reg
app.use('/ownerReg',require('./Routes/OwnerReg'));

//Owner Reg
app.use('/clientReg',require('./Routes/ClientReg'));

//Add Property
app.use('/addProperty',require('./Routes/AddProperty'));

//Comments
app.use('/comments',require('./Routes/Comments'));

//satff Properties
app.use('/staffProperty',require('./Routes/StaffProperty'));

//satff Client
app.use('/staffClient',require('./Routes/StaffClient'));





app.listen(5000,()=>{
    console.log('Server is running on PORT 5000');
})