const mongoose = require("mongoose");
require("dotenv").config();

async function dbConnect(){
    await mongoose.connect('mongodb+srv://root:2710@toggledb.6bbmr.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=> console.log("DB Connected Successfully!!"))
    .catch((error)=>{
        console.log(error.message)
        process.exit(1);
    });
}

module.exports = dbConnect;