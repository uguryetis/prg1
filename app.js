const express=require('express')
const db_connect=require('./db/mysql_connect')
const { send } = require('express/lib/response')
const app =express()
app.get('/',function (req,res){
    res.send('Anasayfa')
})
app.get('/app',function(req,res){
    res.send('app sayfası')

})
app.listen(3000)