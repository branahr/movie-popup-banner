jQuery(document).ready(function($) {
    // Function to load movie data from TMDb API
    function loadMovieData() {
        const movieTitle = mpb_data.movie_title ? mpb_data.movie_title : 'Casino';
        const apiKey = mpb_data.api_key;

        $.ajax({
            url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(movieTitle)}`,
            method: 'GET',
            success: function(response) {
                if (response.results.length > 0) {
                    const movie = response.results[0];
                    $('#mpb-movie-title').text(movie.title);
                    $('#mpb-movie-description').text(movie.overview);
                    $('#mpb-movie-poster').attr('src', `https://image.tmdb.org/t/p/w500/${movie.poster_path}`);
                } else {
                    // If no movie found, display this message
                    $('#mpb-movie-title').text("Movie Not Found");
                    $('#mpb-movie-description').text("We couldn't find any movie matching the title you provided.");
                    $('#mpb-poster-container').html('<svg width="150px" height="150px" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" fill="#EFF1F3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z" fill="#687787"/></svg>');
                }
            },
            error: function() {
                // Handle error if API request fails
                $('#mpb-movie-title').text("Error");
                $('#mpb-movie-description').text("There was an error retrieving the movie data.");
                $('#mpb-poster-container').html('<svg width="150px" height="150px" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" fill="#EFF1F3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M33.2503 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z" fill="#687787"/></svg>');
            }
        });
    }

    const overlayColor = mpb_data.lightbox_color === 'white' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.5)';
    $('#mpb-overlay').css('background-color', overlayColor);

    // Show popup after 5 seconds
    setTimeout(function() {
        loadMovieData();
        $('#mpb-popup').removeClass('mpb-hidden');
        $('#mpb-overlay').removeClass('mpb-hidden');
    }, mpb_data.popup_delay);

    // Close popup when button is clicked
    $('.mpb-close-btn').click(function() {
        $('#mpb-popup').addClass('mpb-hidden');
        $('#mpb-overlay').addClass('mpb-hidden');
    });

    // Close popup when clicking outside
    $('#mpb-overlay').click(function() {
        $('#mpb-popup').addClass('mpb-hidden');
        $('#mpb-overlay').addClass('mpb-hidden');
    });
});
