import mongoose  from "mongoose";



export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://kodieswaran:1234567890@cluster0.v49zf.mongodb.net/food-del ')
        .then(() => console.log("DB connected"))
} 