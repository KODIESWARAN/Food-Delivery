import express from "express";
import { addFood , listfood , removefood } from '../Controllers/foodController.js'


import multer from "multer";


const Routes =  express.Router()

// storage

const storage = multer.diskStorage({
destination: "uploads",
filename : ( req , file , cb) => {
    return cb  (null,`${Date.now()} ${file.originalname}`)
}

})

const upload  =  multer({storage : storage})






Routes.post ('/add' ,upload.single("image") ,addFood)
Routes.get('/list' , listfood)
Routes.post('/remove', removefood)


export default Routes;