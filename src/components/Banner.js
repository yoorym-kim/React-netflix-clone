import React, {useEffect, useState} from "react";
import requests from "../api/requests"
import axios from "../api/axios";
import "./Banner.css"

export default function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //현재 상영중인 영화 정보 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);
        console.log("request fetchNowPlaying",request);
        //여러 영화 중 영화 하나의 id 가져오기
        const movieId =
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ].id;

        const {data: movieDetail} = await axios.get(`movie/${movieId}`, {
            params: {append_to_response: "videos"},
        });

        setMovie(movieDetail);
    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };

    return (
        <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
            >
                <div className="banner__contents">
                    {/* tittle */}
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button play">Play</button>
                        <button className="banner__button info">
                            <div className="space"></div>More Information
                        </button>
                    </div>
                    {/**Div > 2 buttons */}
                    <hi className="banner__description">
                        {truncate(movie?.overview, 100)}
                    </hi>
                    {/* Descriptions */}
                </div>
        </header>
    )
}

