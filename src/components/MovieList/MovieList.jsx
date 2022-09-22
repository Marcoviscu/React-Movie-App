import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { GET } from "../../utils/api.js";
import MovieCard from "../MovieCard";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const MovieList = () => {
  
  const [moviesLatestData, setMoviesLatestData] = useState([]);

  const dispatch = useDispatch();
  const page = useSelector((state) => state.pagination.page);

  useEffect(() => {
    GET("movie", "popular", `&language=en-US&page=${page}`).then((data) =>
      setMoviesLatestData(data.results)
    );
  }, [page]);

  return (
    <div className={styles.Main}>
        <div className={styles.Title}>
          <h1>Popular Movies</h1>
        </div>
        <div className={styles.Pagination}>
          <MovieCard className={styles.Card} movieCardData={moviesLatestData} />
        </div>

        <div className={styles.BtnContainer}>
          <span
            className={styles.Btn}
            onClick={page > 1 ? () => dispatch({ type: "PAGE_PREV" }) : null}
          >
            <AiOutlineArrowLeft />
          </span>
          <span
            className={styles.Btn}
            onClick={page < 30 ? () => dispatch({ type: "PAGE_NEXT" }) : null}
          >
            <AiOutlineArrowRight />
          </span>
        </div>
    </div>
  );
};

export default MovieList;
