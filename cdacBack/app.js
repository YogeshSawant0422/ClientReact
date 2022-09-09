const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

dotenv.config({ path: './config.env' });

require('./db/conn');
const User = require('./model/studentSchema');

app.use(express.json());
//app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})

// REST API Actions And Methods (For Manupulate Data)

app.get('/', (req,res) => {
    res.send(`Connetion Succesfull from app !!!`);
});

app.post('/addStudent', async (req, res) => {
     
    const { mobile, name, email, password } = req.body;
    if (!mobile || !name || !email || !password)
    {
        return res.status(422).json({ error: "Please Fill All Data" });
    }

    try {
       const userExist = await User.findOne({ mobile: mobile }) 
          
       if (userExist) {
           return res.status(422).json({ error: "Number Already Exist" });
       }

        const user = new User({ mobile, name, email, password });

        //Bycrypt Data (Hash)
        // const userRegister = await user.save();
        
        // if (userRegister) {
        //     res.status(201).json({ message: "Student Added Successfully" });
        // }
        // else {
        //     res.status(500).json({ error: "Failed to insert data" });
        // }
        await user.save();
        res.status(201).json({ message: "Student Added Successfully" });

    } catch (err) {
        console.log(err);
    }
});

//Student Login route
app.post('/StudentLogin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill The Data" });
        }
       
        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtocken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });

            if (!isMatch) {
                res.status(400).json({ message: "Invalid Credentials" });
            } else {
                res.json({ message: "Student Login Successfully" });
            }
            
        } else {
             res.status(400).json({ message: "Invalid Credentials" });
        }    
    } catch (err) {
        console.log(err);
    }
});

