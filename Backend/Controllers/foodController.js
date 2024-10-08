
import foodmodel from "../Models/foodModels.js";
import fs from 'fs'


// add fooditem
const addFood =  async (req,res)=> {


    let image_filename =  `${req.file.filename}`;

    const food = new foodmodel ({
          name : req.body.name,
          description :  req.body.description,
          price :  req.body.price,
          category : req.body.category,
          image : image_filename

    })
    try {
        await food.save()
        res.json({success:true ,  message : "Food Added"})
        
    } catch (error) {
        res.json({success:false , message : "error"})
        
    }


}


// list fooditem
const listfood = async (req,res)=> {
  try {
    const food = await foodmodel.find({})
    res.json({success: true ,data : food})
    
  } catch (error) {
    console.log(error);
    res.json({success:false , message : "error "})
    
  }



}


// remove food
const removefood = async(req,res) => {

    try {
        const food = await foodmodel.findById(req.body.id)

        fs.unlink(`uploads/${food.image}`,() => {})
        
        await foodmodel.findByIdAndDelete(req.body.id)
        res.json({success: true , message: "food removed"})
        
    } catch (error) {
        
        console.log(error);
        res.json({success:false , message:"error"})
        
    }
}

export {addFood , listfood , removefood}