import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getMovie, getVideos } from '../../apis';
import "./SingleMovie.css";

export default function SingleMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getMovie(id).then(res => setMovie(res));
        getVideos(id).then(videoRes => {
            setVideos(videoRes)
        });
    }, []);

    return (
        <div className="singleMovie">
            {videos.length > 0 ?
                <iframe
                    width="100%"
                    height="300px"
                    src={`https://www.youtube.com/embed/${videos[0].key}?autoplay=1`}
                >
                </iframe> : ""
            }
            {
                movie ?
                    <section className="detail">
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title}`} />
                        <div>
                            <h4>{movie.title}</h4>
                            <p> {movie.overview}</p>
                        </div>
                    </section>
                    : ""
            }
        </div >
    )
}
