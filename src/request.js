const API_KEY = "8a3d6962b99c06a2bef565df4b0be5e1";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    fetchSearch: `/search/movie?&api_key=${API_KEY}&query=lucifer`
    
}


export default requests;