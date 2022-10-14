import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "./Loading";
import styles from "./Detail.module.css";

//아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faX,
    faStar,
    faHeart,
    faVideo,
    faCircleDown,
} from "@fortawesome/free-solid-svg-icons";

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
            {loading ? (
                <Loading />
            ) : (
                <div
                    className={styles.background_image}
                    style={{
                        backgroundImage: `url(${movie.background_image_original})`,
                    }}
                >
                    <div className={styles.detail_w}>
                        <header className={styles.header}>
                            <h1>
                                <Link to="/">
                                    <FontAwesomeIcon icon={faX} />
                                </Link>
                            </h1>
                        </header>

                        <main className={styles.detail_main}>
                            <section>
                                <h1>{movie.title_long}</h1>
                                <img
                                    src={movie.large_cover_image}
                                    alt={movie.title}
                                />
                            </section>
                            <section>
                                <div className={styles.detail_number}>
                                    <p>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            className={styles.icon}
                                        />
                                        {movie.rating}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={styles.icon}
                                        />
                                        {movie.like_count}
                                    </p>
                                    <p>
                                        <FontAwesomeIcon
                                            icon={faVideo}
                                            className={styles.icon}
                                        />
                                        {movie.runtime} M
                                    </p>
                                    <p>
                                        <FontAwesomeIcon
                                            icon={faCircleDown}
                                            className={styles.icon}
                                        />
                                        {movie.download_count}
                                    </p>
                                </div>
                                <div className={styles.description}>
                                    {movie.description_full}
                                </div>
                                <ul className={styles.genres}>
                                    {genres.map((g) => (
                                        <li key={g}>{g}</li>
                                    ))}
                                </ul>
                            </section>
                        </main>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Detail;
