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

    const {name, key, password} = req.body;

    db.query("SELECT user_key FROM users WHERE user_key = ?", [key], (error, result) => {
        if(error) {
            console.log(error)
        } else if (result.length > 0) {
            return res.render("register", {
                message: "That key is already taken"
            })
        }

        
    })

    db.query("INSERT INTO users SET ?", {name: name, key: key, password: password}, (error, results) =>{
        if (error) {
            console.log(error)
        } else {
            console.log("user registered")
        }
    })

    res.send("Form Submitted");
}

exports.login = (req, res) => {
    const { user_key, password } = req.body;

    // Check if user_key and password are provided
    if (!user_key || !password) {
        return res.json({ status: "error", error: "Please enter your key and password" });
    }

    // Use parameterized query to prevent SQL injection
    db.query("SELECT `id`, `password` FROM users WHERE `user_key` = ?", [user_key], (err, result) => {
        console.log("SQL Query:", "SELECT `id`, `password` FROM users WHERE `user_key` =", user_key);

        if (err) {
            console.error("Error executing MySQL query", err);
            return res.status(500).json({ status: "error", error: "Internal Server Error" });
        }

        // Check if user with the provided user_key exists
        if (!result[0] || !result[0].password) {
            return res.status(401).json({ status: "error", error: "this user does not exist" });
        }
        
        // Compare the provided password with the password in the database
        if (password === result[0].password) {
            // If everything is correct, generate a JWT token and set a cookie
            const token = jwt.sign({ userId: result[0].id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES });
            const cookieOptions = {
                expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("authToken", token, cookieOptions);
            res.json({ status: "success", message: "Login successful" });
        } else {
            return res.json({ status: "error", error: "Incorrect Key or Password" });
        }
    });
};

exports.check = async(req, res) => {
    try {
        // Extract the token from the request cookies
        const token = req.cookies.authToken;
    
        if (!token) {
          // If there's no token, the user is not authenticated
          return res.status(401).json({ authenticated: false });
        }
    
        // Verify the token (you may need to import and use a library like jwt)
        // Add additional verification logic based on your requirements
        // ...
    
        // If verification is successful, the user is authenticated
        return res.json({ authenticated: true });
      } catch (error) {
        console.error('Error checking authentication:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

}