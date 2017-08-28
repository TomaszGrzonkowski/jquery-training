$(function () {

    var moviesList = $('.repertuar');
    var addMovieForm = $('.add_movie');
    var submitButton = $('#addMovie');

    /* * * * * * * * * * * * * * * * * * * * */

    updateView();

    submitButton.on('click', submitForm);

    /* * * * * * * * * * * * * * * * * * * * */

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

    function updateView() {
        // Gets movies from json-server
        getMovies()
            .done(function (res) {
                console.log(res);

                var temp = $('<div>');

                res.forEach(function (mov) {
                    temp.append(createMovieItem(mov));
                });

                this.empty().append(temp.children());
            })
            .fail(function (err) {
                console.error(err);
            });
    }

    function getFormData() {
        return {
            title: addMovieForm.find('.get_title').val(),
            description: addMovieForm.find('.get_description').val()
        };
    }

    function postFormData() {
        var config = {
            method: 'POST',
            url: 'http://localhost:3000/movies',
            data: getFormData(),
            dataType: 'json'
        };

        return $.ajax(config);
    }

    function submitForm(event) {
        event.preventDefault();

        postFormData()
            .done(function (res) {
                console.log(res);
                updateView();
            })
            .fail(function (err) {
                console.error(err);
            });
    }

});
