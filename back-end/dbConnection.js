const mongoose = require("mongoose");
const connectDB = async() =>{
    try{
        await mongoose.connect('mongodb://localhost:27017/bookmyshow');
        console.log('Connected to MongoDB Database');
    }
    catch(error){
        console.error(error);
    }
}

module.exports = connectDB;