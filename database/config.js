var mongoose = require('mongoose');
var dotenv = require('dotenv');

// Url to connection
const uri = process.env.MONGO_URI;

const mongoConn = () => {

    try 
    {
        mongoose.connect(uri, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
            });
        console.log("Connection successfull! ");
    } catch (error) {
        console.log("Error connecting with mongoDb ", error);
        throw new Error("Error in MongoDB ");
    }
}

module.exports = { mongoConn }