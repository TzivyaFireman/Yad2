
const TOKEN_SECRET = "*****";
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
    const token = req.headers["authorization"]; // קבלת הטוקן מכותרת ההרשאה
    console.log(token);
    if (!token) {
        return res.status(403).send("אסימון נדרש לאימות");
    }

    try {
        const decoded = jwt.verify(token, TOKEN_SECRET); // אימות הטוקן באמצעות סוד מוגדר
        console.log("✔️משתמש אומת בהצלחה...");
        next();
    } catch (err) {
        return res.status(401).send("אסימון לא חוקי");
    }
};

module.exports = checkToken;