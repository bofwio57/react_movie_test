import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, medium_cover_image, title }) {
    return (
        <div className={styles.movie}>
            <img
                src={medium_cover_image}
                alt={title}
                className={styles.movie__img}
            />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Movie;

/* <p>
{summary.length > 235
    ? `${summary.slice(0, 235)}...`
    : summary}
</p> */
