const jwt = require('jsonwebtoken')

module.exports = (rwq, res, next) => {
    const token = req.get('Authorisation').split(" ")[1]
    let decodedToken
    try {
        jwt.verify(decodedToken, "secretprivatekey")
    }catch(err) {
        console.log(err)
    }
    if(!decodedToken) {
        console.log("undefined token")
    }
    req.userId = decodedToken.id
    req.userId = decodedToken.role
    next()
}