const TOKEN_SECRET = "*****";
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers["authorization"]; 
    console.log(token);
    if (!token) {
        return res.status(403).send("אסימון נדרש לאימות");
    }

    try {
        jwt.verify(token, TOKEN_SECRET); 
        console.log("✔️משתמש אומת בהצלחה...");
        next();
    } catch (err) {
        next(err);
    }
};

module.exports = checkToken;