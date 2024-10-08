import usermodel from '../Models/Usermodels.js'


// addTocart
const addTocart = async (req,res) => {
    try {
        let userData = await usermodel.findOne({_id:req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1 
        }
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true , message:"Added To cart"})

    } catch (error) {
        console.log(error);
        res.json({success: false,message:"Error"})
        
    }

    
}

// removecart 

const removecart = async (req,res) => {
    try {
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId] -= 1
        } 
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true , message:"Removed From cart"})

        
    } catch (error) {
        console.log(error);
        res.json({success: false,message:"Error"})

        
    }
}

// getcart
const getcart = async (req,res) => {
    try {
        let userData = await usermodel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true , cartData})            
    } catch (error) {
        console.log(error);
        res.json({success: false,message:"Error"})       
    }
    
}


export {getcart ,removecart ,addTocart}