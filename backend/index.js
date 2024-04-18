const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Chandu:Schandu1@cluster0.vbqyaki.mongodb.net/Nolani?retryWrites=true&w=majority&appName=Cluster0")

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json('Success')
                }
                else {
                    res.json("the password is incorrrect")
                }
            }
            else {
                res.json('No record existed')
            }
        })
})
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err))
})
app.listen(3001, () => {
    console.log("Server is running")
})


// 103.214.62.185
//mongodb+srv://Chandu:Schandu1#@cluster0.ufrzv79.mongodb.net/Assignment?retryWrites=true&w=majority&appName=Cluster0
// mongodb+srv://Chandu:<password>@cluster0.ufrzv79.mongodb.net/