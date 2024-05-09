var myDate = new Date();

const timeAndUrl = (req, res, next) => {
    console.log("at: " + myDate.getTime() + "     call to: " + req.originalUrl);
    next();
}

module.exports = timeAndUrl;
