const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
dotenv.config({ path: './config.env' })
require('./db/conn')


app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


app.use(require('./router/auth'))

const PORT = process.env.PORT || 8000


app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
  });


// app.get('/',(req,res)=>{
//     res.send('hello from server.js')
// })



app.listen(PORT, () => console.log(`server running on port:${PORT}`))









//Schema

// const userSchema = new mongoose.Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     role: {
//         type: String,
//         required: true
//     }

// })

// const User = new mongoose.model("User", userSchema)






// //ROutes
// app.post('/login', (req, res) => {
//     res.send('log')
// })
// app.post('/register', (req, res) => {
//     const { email, password, role } = req.body
//     User.findOne({ email: email }, (err, user) => {
//         if (user) {
//             res.send({ message: 'User already registered' })
//         } else {const user = new User({
//             email,
//             password,
//             role
//         })
//         user.save(err => {
//             if (err) {
//                 res.send(err)
//             } else {
//                 res.send({ message: 'successful' })
//             }

//         })
//     }
//     })


// })
