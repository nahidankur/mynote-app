import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()


const mongoConnect = async ()=>{
    try{

 await mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
 console.log('Mongodb Connected...')

    } catch(err){
        console.log(err)
    }

}

mongoConnect()


