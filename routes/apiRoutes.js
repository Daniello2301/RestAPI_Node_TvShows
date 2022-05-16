var router = require('express').Router();

//Create get method tha return "Hello World"
router.get('/', (req, res) => {

    res.json({
        status: "API its working",
        message: 'Welcom to API create using Express and mongoDb'
    });
})

//Import tvshows controller
var tvshowController = require('../controllers/tvshowsController');

// Tv shows routes

router.route('/tvshows')
    .get(tvshowController.findAll)
    .post(tvshowController.create);


router.route('/tvshows/:id')
    .get(tvshowController.findById)
    .patch(tvshowController.update)
    .put(tvshowController.update)
    .delete(tvshowController.deleteById);


//Export routes to acces from other files
module.exports = router;