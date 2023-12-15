const mysql = require("mysql");
const jwt = require("jsonwebtoken")

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST, // put the IP adress of the server on deployment
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});


exports.register = (req, res) => {
    console.log(req.body)

    const {name, email, password} = req.body;

    db.query("SELECT email FROM users WHERE email = ?", [email], (error, result) => {
        if(error) {
            console.log(error)
        } else if (result.length > 0) {
            return res.render("register", {
                message: "That email is already taken"
            })
        }

        
    })

    db.query("INSERT INTO users SET ?", {name: name, email: email, password: password}, (error, results) =>{
        if (error) {
            console.log(error)
        } else {
            console.log("user registered")
        }
    })

    res.send("Form Submitted");
}

exports.login = (req, res) => {
    const {email, password} = req.body;
    if(!email || !password) return res.json({status: "error", error: "Please Enter your email and password"});
    else {
        db.query("SELECT email FROM users WHERE email = ?", [email], (err, result) => {
            if (err) {
                console.error("Error executing MySQL query", err);
                return res.status(500).json({ status: "error", error: "Internal Server Error" });
            }
            if(!result[0] || !result[0].password) return res.json({status: "error", error: "Incorrect Email or Password"});
            else {
                const token = jwt.sign({ userId: result[0].id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES});
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true,
                }
                res.cookie("authToken", token, cookieOptions);
                res.render("success")
            }
        })
    }
}