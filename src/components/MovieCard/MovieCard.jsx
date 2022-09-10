import styles from "./index.module.scss";
import React from 'react';

const MovieCard = ({movieCardData}) => {
    
    const { title, vote_average, backdrop_path} = movieCardData;


    return (
        <div className={styles.MovieCard}>
            <h1 className={styles.Title}> { title } </h1>
            <img className={styles.Img}src={`https://image.tmdb.org/t/p/original${ backdrop_path }`} alt='image'></img>   
            <p className={styles.Rating}>Rating: { vote_average }</p>
        </div>
    );
}

export default MovieCard;

