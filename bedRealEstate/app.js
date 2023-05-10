const express = require('express')
const cors = require('cors');
require('dotenv').config();
const app = express();


const mongoose = require('mongoose');

// models
const User = require('./models/user.js');
const Appoint = require('./models/appointment.js');
const Property = require('./models/propertylist.js');

const jwt = require('jsonwebtoken')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/register-login');
const mongoDb = mongoose.connection

mongoDb.on('error',(error)=>{
    console.log(error);
})
mongoDb.once('connected',()=>{
    console.log('DB Connected');
})



// app.post('/login', async(req, res)=>{
//     try {
//         const { email, password } = req.body
//         const xxx = await User.findOne({email: email});
//         console.log(xxx);
//         if(password===xxx.password){
//             if(xxx.role==='Admin'){
//                 res.send('Login Admin')
//             }
//             else if(xxx.role==='Agent'){
//                 res.send('Login Agent')
//             }
//             else{
//                 res.send('Login Success')
//             }
//         }
//         else{
//             res.send('Invalid Inputs')
//         }
        
//     } catch (error) {
//         res.send(error);
//     }
// })


app.post('/login',(req,res)=>{

    const {email,password}= req.body;

    if(!email && !password){
        res.send('Invalid Inputs');
    }
    else{

        User.find({email:email,password:password}).then(userFound=>{
            console.log(userFound);
            
            if(!userFound){
                res.send("not exist ")
                console.log('No user Found!!');
            }
            else
            {
    
                    console.log('Generating Token....');
                    let jwtToken = jwt.sign({email:userFound.email,id:userFound._id},process.env.SEC_KEY)
                    
                    userFound={token:jwtToken}
                    res.send(userFound);
                    console.log("userfound",userFound)
                    console.log('Token Generated Successfully');

            }
        })
    }
})
                // if(password===userFound.password){
                //     if(userFound.role==='Admin'){
                //         res.send('Login Admin')
                //     }
                //     else if(userFound.role==='Agent'){
                //         res.send('Login Agent')
                //     }
                //     else{
                //         res.send('Login Success')
                //     }
                // }
                            


                // res.cookie('myToken', jwtToken, { maxAge: 24 * 60 * 60 * 1000 }).json(userFound); 
                // console.log(userFound);

                // console.log(document.cookie);
                // ,(err,token)=>{

                //     if(err){
                //         return res.send(err)
                //     }
                //     else{
                //         //console.log(userFound)
                //         res.cookie("token",token).json(userFound)
                //     }
                
                // })
//             }
        
//         })
//     }
// })

app.get('/profile',checkToken, async (req,res)=>{
    // console.log(document.cookie)
    // const {token} =req.cookies;
    // console.log(token)
    // if(token){
    //     jwt.verify(token, process.env.SEC_KEY,{}, async (err, decoded)=>{
    //         if(err){
    //             res.send(err)
    //             }
    //             else{
    //                 const data = await User.findById(decoded.id)
    //                 res.json(data)
    //             }
    // })
            
    // }
    console.log('url hit on profile, middleware should already have been called..');
    res.send('Profile verification stage...')
})

function checkToken(req, res) {
    console.log('checkToken middleware called...');
    
    const authHeader = req.headers['authorization'];
    // console.log(req.headers);
    const authCookie = authHeader && authHeader.split(' ')[1];

    jwt.verify(authCookie, process.env.SEC_KEY, async (err, data)=>{
        if(err){
            res.send(err);
            console.log('middleware me error hai....');
        }
        else{
            console.log('middleware chal peyaa.....');
            console.log("data",data);
            // const x = await User.findById(data.id)
            // res.json(x)
        }
    })

}


app.post('/register',async(req,res)=>{
    const {fname, lname, email, password, phone, role} = req.body
    const user = new User({
        fname,
        lname,
        email,
        password,
        phone,
        role
        
    })
    try {
        const { email, password } = req.body
        const xxx = await User.findOne({email: email});
        console.log(xxx);
        if(xxx!=null) {
            res.send('Already registered')
            // console.log('already reg...')
        }
        else{
            const result = await user.save();
            res.send({message: "Registered Successfully"});
            // console.log('reg success...')
        }
        
    } catch (error) {
        res.send(error);
    }
        
})

app.get('/appoint', async (req, res) => {

    try {
        const allUser = await User.find({role: 'Agent'});
        res.send({ status: "ok", data: allUser})

    } catch (error) {
        console.log(error);
    }

})

app.post('/appointmentdata',async(req,res)=>{
    const {roles, name, email, date, time} = req.body
    const appoint = new Appoint({
        roles,
        name,
        email,
        date,
        time
    })
    try {
        // const { name, email } = req.body
        // const xxx = await Appoint.findOne({email: email});
        // console.log(xxx);
        
            const result = await appoint.save();
            res.send({message: "Appointment Booked Successfully"});
        
        
    } catch (error) {
        res.send(error);
    }
        
})


app.get('/checkappoint', async (req, res) => {

    try {
        const alUser = await Appoint.find({});
        res.send({ status: "ok", data: alUser})

    } catch (error) {
        console.log(error);
    }

})



app.get('/user',(req,res)=>{

    User.find().then((user)=>{
        res.send(user)
    })
})


// app.get('/set-cookie', (req, res) => {
//     res.cookie('myCookie', "jwtToken", { maxAge: 24 * 60 * 60 * 1000 }); // 1 day
//     res.send('Cookie has been set!');
// })



app.listen(8000, () => {
    console.log("Port Connected");
})
