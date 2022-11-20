require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = () =>{

    mongoose.connect(process.env.URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then((data) =>{

    console.log('Database connected 🥳🥳🥳🥳');

})
.catch(err =>{

    console.log('Connection failed ☹️☹️☹️☹️');

})
}





module.exports = connectDB;