import styles from './index.module.scss';
import { useState, useEffect } from "react";
import { GET } from "../../utils/api.js";
import MovieCard from '../MovieCard';

const Pagination = ({}) => {

   
    const [moviesLatestData, setMoviesLatestData] = useState([]);


    const [page,setPage] = useState(1);
    useEffect(() => {
        GET("movie", "popular", `&language=en-US&page=${page}`).then((data) =>
        setMoviesLatestData(data.results)
      );
    },[page]);


    const handlePrevOnClick= () =>{
        setPage((prev) => prev-1);
    };

    
    const handleNextOnClick= () =>{
        setPage((prev) => prev+1);
    };


    return (
        <div className={styles.Pagination}>
            <div className={styles.Title}>
                <h1>Popular Movies</h1>

            </div>
            <div className={styles.MovieList}>
                     <MovieCard movieCardData={moviesLatestData}/>   
            </div>


            <div className={styles.BtnContainer}>
                <button onClick={page > 1 ? handlePrevOnClick : undefined}>Prev</button>
                <button onClick={page < 30 ? handleNextOnClick: undefined}>Next</button>
            </div>
            
        </div>

    )
}


export default Pagination;


// creare uno useEffet con la get e inserire la page come dipendenza
// 
// 1 state(page,setPage)
// 2 costruire due function(onprevPage, onNextPage) in callback dove viene aggiornato lo state
// 3 costruire due bottoni e inserire onPrev e onNext all'onClick 
// 4 dare le relative condizioni(non utilizzare &&, meglio un ternario e nell'else inserire undefined)