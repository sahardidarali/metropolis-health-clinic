const express =require('express')
const router=express.Router()

router.get('/',(req,res)=>{
    res.send('hello from auth.js')
})

router.post('/register',(req,res)=>{
    console.log(req.body);
    // res.json({message:req.body})
    res.send('reg page')
})


module.exports=router