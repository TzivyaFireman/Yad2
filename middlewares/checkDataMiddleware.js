const checkData = (req, res, next) => {
    if (((req.method === 'POST' || req.method === 'PUT')) && Object.keys(req.body).length === 0)
        res.status(400).send("הי! זו בקשה שצריכה לקבל נתונים!🥴");
    else
        next();
}

module.exports = checkData;