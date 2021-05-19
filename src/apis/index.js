const apiKey = process.env.MOVIE_API_KEY || "e63c75b1b6d500cd283f542e8e1ed2da";

const getPopulars = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
    const populars = await res.json();
    return populars.results;
};

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    const movie = await res.json();
    return movie;
};

const getActors = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
    const stuff = await res.json();
    return stuff.cast;
};

const getCrew = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
    const stuff = await res.json();
    return stuff.crew;
};

const getSingleActor = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
    const stuff = await res.json();
    return stuff.cast;
};

const getByCategory = async (id, page = 1) => {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}`)
    const byCategory = await res.json();
    return { movies: byCategory.results, total: byCategory.total_pages };
};

const getVideos = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`);
    const videos = await res.json();
    return videos.results;
}


const searchMovie = () => { 
    
}

export {
    getPopulars, getMovie, getVideos,
    getActors, getSingleActor,
    getCrew, getByCategory
};