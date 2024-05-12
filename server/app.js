// DEPENDENCIES
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const poolDB = require("./db");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// MIDDLEWARE
const corsOptions = {
    credentials: true,
    origin: '*'  
};

app.use(cors(corsOptions));

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

// GET Operation
app.get("/get", async (req, res) => {
    try {
        const users = await poolDB.query("SELECT * FROM bayavasfdc.products__c");
        res.status(200).json(users);
    } 
    catch (error) {
        console.error(error.message)
    } 
});

// LISTENER
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});