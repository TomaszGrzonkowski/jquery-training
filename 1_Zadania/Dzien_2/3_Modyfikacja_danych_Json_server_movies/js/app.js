$(function () {

    var moviesList = $('.repertuar');

    function getMovies() {
        var config = {
            method: 'GET',
            url: 'http://localhost:3000/movies',
            dataType: 'json',
            context: moviesList
        };

        return $.ajax(config);
    }

    function createMovieItem(movie) {
        var heading = $('<h3>').text(movie.title);
        var paragraph = $('<p>').text(movie.description);

        return $('<li>').append(heading, paragraph);
    }

    // Gets movies from json-server
    getMovies()
        .done(function (res) {
            console.log(res);

            var temp = $('<div>');

            res.forEach(function (mov) {
                temp.append(createMovieItem(mov));
            });

            this.append(temp.children());
        })
        .fail(function (err) {
            console.error(err);
        });

});
