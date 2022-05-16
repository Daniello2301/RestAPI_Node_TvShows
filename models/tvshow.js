var mongoose = require('mongoose');

var tvshowSchema = mongoose.Schema({

    title: { type: String },
    year: { type: String},
    country: { type: String },
    poster: { type: String },
    seassons: { type: Number },
    genre: {
        type: String,
        enum: [ 'Drama', 'Fantasy', 'Sci-Fi', 'Thriller', 'Comedy', 'Action' ]
    },
    summary: { type: String }
});

// Export Book model
var TVShow = module.exports = mongoose.model('TVShow', tvshowSchema);

module.exports.get = function (callback, limit) {
    TVShow.find(callback).limit(limit);
}