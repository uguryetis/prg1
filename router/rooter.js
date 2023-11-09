const router=require('express').Router()
const{login,register}=require('../controller')
router.post("/login",login)
router.post("/register",register)
//post:veri gönderme get veri alma put:güncelleme patch:veri güncelleme
//delete:veri silme
module.export=router
