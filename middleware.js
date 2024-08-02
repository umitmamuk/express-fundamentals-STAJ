const accessControl = (req, res, next) => {
    const access = false;
    if(!access){
        res.status(401).json({
            success: false,
            message: "Access Denied"
        })
    }

    console.log("Middleware is working");
    next();
}
const defaultMiddleware = (req, res, next) => {
    console.log("Default Middleware is working");
    next();
}
module.exports = {
    accessControl,
    defaultMiddleware
};