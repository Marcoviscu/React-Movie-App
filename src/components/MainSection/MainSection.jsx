import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import styles from './index.module.scss';
import MoviePopularList from "../MoviePopularList/index.jsx";

const MainSection = ({}) => {

const [moviesData, setMoviesData] = useState([]);

useEffect(() => {
    GET('movie','popular','&language=en-US').then(data => setMoviesData(data));

},[]);
   
   
return (
    <div className={styles.MainSection}>
        <h1>MOST POPULAR MOVIES</h1>
        <MoviePopularList moviePopularList={ moviesData.results}
        />

    </div>
   )
    
}

export default MainSection;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US