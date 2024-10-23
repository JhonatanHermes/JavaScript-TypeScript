module.exports = (req, res, next) => {
    
    if(req.body.cliente) {
        console.log(`Passou pelo ${req.body.cliente}`)
    }

    next()
}