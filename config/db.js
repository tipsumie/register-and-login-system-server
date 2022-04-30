const mongoose = require('mongoose')

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DATABASE)

        console.log('Connect DB Successfully')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB