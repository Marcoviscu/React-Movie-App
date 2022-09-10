import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import styles from './index.module.scss';
import CardList from "../CardList/index.jsx";
import Hero from '../Hero/index.jsx';



const MainSection = () => {

const [moviesPopularData, setMoviesPopularData] = useState([]);
const [moviesTopRatedData, setMoviesTopRatedData] = useState([]);
const [moviesUpcomingData, setMoviesUpcomingData] = useState([]);

useEffect(() => {
    GET('movie','popular','&language=en-US').then(data => setMoviesPopularData(data));

    GET('movie', 'top_rated', '&language=en-US').then(data => setMoviesTopRatedData(data));

    GET('movie', 'upcoming', '&language=en-US').then(data => setMoviesUpcomingData(data));

},[]);

{console.log(moviesUpcomingData.results)}

return (
    <div className={styles.MainSection}>
        <Hero heroData={moviesPopularData.results}/>
        <h3  className={styles.title}>Top Rated</h3>
        <div>
            <CardList cardListData= { moviesTopRatedData.results }/>
        </div>
        <h3 className={styles.title}>Upcoming</h3>
        <div>
            <CardList cardListData ={ moviesUpcomingData.results }/>
        </div>
    </div>
   )
    
}

export default MainSection;
