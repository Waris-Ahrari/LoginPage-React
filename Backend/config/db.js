const mongoose = require('mongoose')


const MONGO_URI = "mongodb+srv://waris_ahrari:cxOiejpLiRptQfCb@cluster0.5vvwtns.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        
        console.log(`connected to DB`);

    }catch (error){
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;