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
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOptions));

// ROUTES
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

// GET Operation
app.get("/getCategories", async (req, res) => {
    try {
        const categories = await poolDB.query("SELECT distinct on (category__c) category__c, cover_photo__c, family__c FROM bayavasfdc.products__c");
        res.status(200).json({msg: "Success", data: categories.rows});
    } 
    catch (error) {
        console.error(error.message)
    } 
});

app.get("/getProducts", async (req, res) => {
    try {
        const products = await poolDB.query("SELECT * FROM bayavasfdc.products__c");
        res.status(200).json({msg: "Success", data: products.rows});
    } 
    catch (error) {
        console.error(error.message)
    } 
})

// LISTENER
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});