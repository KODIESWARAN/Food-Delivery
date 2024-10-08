import orderModel from "../Models/ordermodel.js";
import usermodel from "../Models/Usermodels.js";
import Stripe from 'stripe'


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


const frontend_url = "http://localhost:5174"


// plscing order from user

const placeOrder = async (req,res) => {

    try {
        const newOrder = new orderModel({
            userId : req.body.userId,
            items : req.body.items,
            amount : req.body.amount,
            address : req.body.address
        })
        await newOrder.save();
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData: {}});

        const line_items =req.body.items.map((item) => ({
            price_data :{
                currency :"USD",
                product_data :{
                    name : item.name
                },
                unit_amount : item.price*100

            },
            quantity : item.quantity
        }))

        line_items.push({
            price_data :{
                  currency :"USd",
                  product_data : {
                    name :"Delivery Charges"
                  },
                  unit_amount : 2*100
            },
            quantity : 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode: "payment",
            success_url :`${frontend_url}/verify?success=true&orderId=${newOrder._id }`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id }`

        })
        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }
    
}

const verifyorder = async (req,res) => {
    const {orderId,success} = req.body;
    try {
        if(success == "true"){
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true , message:"paid"})
        }else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
        
    }
    
}

// user order
const userOrder = async (req,res) => {
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }

    
    
}
// list order
const listOrder  = async (req,res) => {
   try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders })
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
   }
}

//order status
const  updatestatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
        
    }
    
}


export {placeOrder, verifyorder, userOrder, listOrder ,updatestatus}