const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config({ path: './.env' })

const app = express();

// Specify the allowed origin (replace http://localhost:8000 with your React app's URL)
const allowedOrigins = ['http://localhost:8000'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials
}));


const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, // put the IP adress of the server on deployment
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

// Parse URL encoded bodies
app.use(express.urlencoded({extended:false}))
// Parse JSON
app.use(express.json())

db.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("MYSQL CONNECTED")
    }
});

// Define Routes
app.use("/auth", require("./routes/auth"))

app.listen(3000, () => {
    console.log("Server running on port 3000")
})

