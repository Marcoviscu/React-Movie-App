import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import styles from './index.module.scss';
import MoviePopularList from "../MoviePopularList/index.jsx";
import TopRatedList from "../TopRatedList/index.jsx";

const MainSection = ({}) => {

const [moviesData, setMoviesData] = useState([]);
const [moviesTopRatedData, setMoviesTopRatedData] = useState([]);

useEffect(() => {
    GET('movie','popular','&language=en-US').then(data => setMoviesData(data));

    GET('movie', 'top_rated', '&language=en-US').then(data => setMoviesTopRatedData(data));

},[]);
   
   
return (
    <div className={styles.MainSection}>
        <h3  className={styles.title}>Top Rated</h3>
        <div className={styles.container}>
            <TopRatedList moviesTopRatedList ={ moviesTopRatedData.results } />
        </div>
        <h3 classname={styles.title}>Popular Movies</h3>
        <div className={styles.container}>            
            <MoviePopularList moviePopularList={ moviesData.results}
            />
        </div>
    </div>
   )
    
}

export default MainSection;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US