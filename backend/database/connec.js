import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(process.env.COMPASS_URI);
    console.log("Database Connected")
}