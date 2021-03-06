const mongoose= require('mongoose')
const config= require('config')
const db= config.get('mongoURI')

// mogoose.Mongoose.connect(db)
const connectDB = async ()=>{
    try{
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useUnifiedTopology: true 
        });

        console.log('mongoDB conncted...');
    }catch(err){
    console.error(err.message);
    process.exit(1);
    }
}
module.exports =connectDB;