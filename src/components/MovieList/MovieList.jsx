import styles from "./index.module.scss";
import { useState, useEffect, useContext, useReducer } from "react";
import { GET } from "../../utils/api.js";
import MovieCard from "../MovieCard";
import GeneralContext from "../../utils/initialState";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const MovieList = () => {
  const [reducer, initialState] = useContext(GeneralContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const [moviesLatestData, setMoviesLatestData] = useState([]);

  const page = state.page;
  useEffect(() => {
    GET("movie", "popular", `&language=en-US&page=${page}`).then((data) =>
      setMoviesLatestData(data.results)
    );
  }, [page]);

  return (
    <div className={styles.Main}>
      <GeneralContext.Provider value={{ state, dispatch }}>
        <div className={styles.Title}>
          <h1>Popular Movies</h1>
        </div>
        <div className={styles.Pagination}>
          <MovieCard movieCardData={moviesLatestData} />
        </div>

        <div className={styles.BtnContainer}>
          <span className={styles.Btn}
            onClick={page > 1 ? () => dispatch({ type: "PAGE_PREV" }) : null}>
            
            <AiOutlineArrowLeft/>
            
          </span>
          <span className={styles.Btn} onClick={page < 30 ? () => dispatch({ type: "PAGE_NEXT" }) : null}>
            <AiOutlineArrowRight/>
          </span>
        </div>

        {/* <button
          onClick={() => {
            console.log(Pagination);
          }}
        ></button> */}
      </GeneralContext.Provider>
    </div>
  );
};

export default MovieList;

// creare uno useEffet con la get e inserire la page come dipendenza
//
// 1 state(page,setPage)
// 2 costruire due function(onprevPage, onNextPage) in callback dove viene aggiornato lo state
// 3 costruire due bottoni e inserire onPrev e onNext all'onClick
// 4 dare le relative condizioni(non utilizzare &&, meglio un ternario e nell'else inserire undefined)
