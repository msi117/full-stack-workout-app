const asyncHandler = require("express-async-handler");

const protect = asyncHandler( async(req, res, next) => {
    console.log('URL: ',req.baseUrl)
    const {name} = req.body

    if(name !== "John") {
        throw new Error('Not John')
    }
    next()

} )

module.exports = {protect}