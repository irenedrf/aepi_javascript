//crear endpoints

const requestTopRatedFilms = "https://api.themoviedb.org/3/movie/top_rated?api_key=e6ddc55fdf76dfed673b97b4375ba6be";

const requestPopularFilms = "https://api.themoviedb.org/3/movie/popular?api_key=e6ddc55fdf76dfed673b97b4375ba6be";

const requestTopRatedSeries = "https://api.themoviedb.org/3/tv/top_rated?api_key=e6ddc55fdf76dfed673b97b4375ba6be";

//elículas más populares

fetch(requestTopRatedFilms)
    .then(response => response.json())
    .then(datos => {
        console.log(datos)



    })
    .catch(error => {
        console.log(error)
    })



//películas más valoradas

//series más valoradas

