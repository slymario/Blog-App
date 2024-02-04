const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const colors = require('colors');

//DATABASE CONNECTION
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        // console.log("Database connection established");
        console.log(`Connected to Mongodb Database`.bgMagenta.white);
    } catch (err) {
        // console.error(err);
        console.log(`Error connecting to Mongodb ${err}`.bgRed.white)
    }
}

dotenv.config();
app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`App is running on port ${process.env.PORT}`.bgCyan.green);
})