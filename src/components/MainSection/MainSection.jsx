import { useState,useEffect } from "react";
import { GET } from "../../utils/api.js";
import styles from "./index.module.scss";
import CardList from "../CardList/index.jsx";
import Hero from "../Hero/index.jsx";
import MovieList from "../MovieList/index.jsx";
// import GeneralContext from "../../utils/initialState.jsx";

const MainSection = () => {

  const [moviesPopularData, setMoviesPopularData] = useState();
  const [moviesTopRatedData, setMoviesTopRatedData] = useState();
  const [moviesUpcomingData, setMoviesUpcomingData] = useState();

  useEffect(() => {
    GET("movie", "popular", '&language=en-US&page=1').then((data) =>
      setMoviesPopularData(data.results)
    );

    GET("movie", "top_rated", '&language=en-US&page=1').then((data) =>
      setMoviesTopRatedData(data.results)
    );

    GET("movie", "upcoming", '&language=en-US&page=1').then((data) =>
      setMoviesUpcomingData(data.results)
    );
  }, []);


  return (
    <div className={styles.MainSection}>
      <Hero heroData={moviesPopularData} />
      <h3 className={styles.title}>Top Rated</h3>
      <div>
        <CardList cardListData={moviesTopRatedData} />
      </div>
      <h3 className={styles.title}>Upcoming</h3>
      <div>
        <CardList cardListData={moviesUpcomingData} />
      </div>

      <div className={styles.MovieList}>
          <MovieList/>
      </div>

    </div>
  );
};

export default MainSection;
