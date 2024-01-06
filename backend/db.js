require("dotenv").config();
const mongoose = require('mongoose');
// Enable strict query mode for Mongoose
mongoose.set('strictQuery', true);

// Function to connect to the MongoDB database
const connectToDatabase = async () => {
    try {
        // Mongoose Connection Information
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        // Event handler for successful connection
        mongoose.connection.on('connected', () => {
            console.info('Success! Connected to Database.');
        });

        // Event handler for database disconnection
        mongoose.connection.on('disconnected', () => {
            console.error('!!!!!!!!!! Database Disconnected !!!!!!!!!!');
        });

        // Event handler for database reconnection
        mongoose.connection.on('reconnected', () => {
            console.warn('!!!!!!!!!! Database Reconnected  !!!!!!!!!!');
        });

        // Event handler for database connection error
        mongoose.connection.on('error', (error) => {
            console.error('Failed! Database connection failed. \n', error);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

};

module.exports = connectToDatabase;