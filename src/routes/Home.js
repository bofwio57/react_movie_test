import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "./Loading";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    //예전 방식
    // useEffect(()=>{
    //     fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    //     )
    //     .then((response)=> response.json())
    //     .then((json)=>{
    //         setMovies(json.data.movies);
    //         setLoading(false);
    //     });
    // },[]);

    //요즘
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);

    return (
        /* movies.map((아무거나)  */
        <div className={styles.container}>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <header className={styles.header}>
                        <h1>MOVIE</h1>
                    </header>
                    <main className={styles.movies}>
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                medium_cover_image={movie.medium_cover_image}
                                title={movie.title}
                                genres={movie.genres}
                            />
                        ))}
                    </main>
                </div>
            )}
        </div>
    );
}

export default Home;
