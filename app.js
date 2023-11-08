const express=require('express')
const { send } = require('express/lib/response')
const app =express()
app.get('/app',function (req,res){
    res.send('hello world')
})
app.listen(3000)