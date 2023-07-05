var express = require('express');
var router = express.Router();

const KEY = process.env.KEY;


router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}`)
    .then(res => res.json())
    .then(data => {
        res.json({result: true, movies: data.results})
     })
})


module.exports = router;
