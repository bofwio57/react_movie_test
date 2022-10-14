import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [genres, setGenres] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        setLoading(false);
        setMovie(() => json.data.movie);
        setGenres(json.data.movie.genres);
        console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>
                <Link to="/">MOVIE</Link>
            </h1>
            <img src={movie.background_image} alt={movie.title} />
            <div>
                <div>
                    <h1>{movie.title_long}</h1>
                    <img src={movie.large_cover_image} alt={movie.title} />
                </div>
                <div>
                    <p>
                        ⭐{movie.rating} &nbsp;&nbsp;&nbsp;&nbsp; ❤️
                        {movie.like_count}
                    </p>
                    <p>🎬 {movie.runtime} Minutes</p>
                    <ul>
                        {genres.map((g) => (
                            <li key={g}>🔸{g}</li>
                        ))}
                    </ul>
                    <p>{movie.description_full}</p>

                    <p>⬇️ {movie.download_count}</p>
                </div>
            </div>
        </div>
    );
}
export default Detail;
