var TVShow = require('../models/tvshow');

//GET
exports.findAll = (req, res) => {

    TVShow.find(function (err, tvshows) {
        if (err) res.send(500, err.message);
    
        console.log("GET /tvshows");
        res.status(200).jsonp(tvshows);
      });
};

//GET By Id
exports.findById = (req, res) => {

    TVShow.findById(req.params.id, (err, tvshow) => {
        if(err) return res.send(500, err.message);

        console.log("Get/tvshow/ " + req.params.id);
        res.status(200).jsonp(tvshow);
    });
};

//POST create
exports.create = function (req, res) {
    console.log("POST");
    console.log(req.body);
  
    var tvshow = new TVShow({
      title: req.body.title,
      year: req.body.year,
      country: req.body.country,
      poster: req.body.poster,
      seasons: req.body.seasons,
      genre: req.body.genre,
      summary: req.body.summary,
    });
  
    tvshow.save(function (err, tvshow) {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(tvshow);
    });
  };



//PUT update 
exports.update = (req, res) => {

    TVShow.findById(req.params.id, (err, tvshow) => {
        tvshow.title =  req.body.title;
        tvshow.year = req.body.year;
        tvshow.country = req.body.country;
        tvshow.poster = req.body.poster;
        tvshow.seassons = req.body.seassons;
        tvshow.genre =  req.body.genre;
        tvshow.summary = req.body.summary; 

        tvshow.save( (err) => {
            if(err) return res.status(500).send(err.message);

            res.status(200).json(tvshow);
        });
    });
};

//DELETE By ID
exports.deleteById = (req, res) => {
    TVShow.findById(req.params.id, (err, tvshow) => {
        tvshow.remove( (err) => {
            if(err) return res.status(500).send(err.message);

            res.status(200).send();
        });
    });
};