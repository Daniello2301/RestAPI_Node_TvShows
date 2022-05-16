var router = require('express').Router();

//Create get method tha return "Hello World"
router.get('/', (req, res) => {

    res.json({
        status: "API its working",
        message: 'Welcom to API create using Express and mongoDb'
    });
})


//Export routes to acces from other files
module.exports = { router }