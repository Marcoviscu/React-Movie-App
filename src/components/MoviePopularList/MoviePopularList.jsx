import styles from "./index.module.scss";
import MovieCard from "../MovieCard";
const MoviePopularList = ({moviePopularList}) => {


 return (
  <div className={styles.PopularList}>
    {moviePopularList && moviePopularList.map( movie => <MovieCard movieCardData={ movie } key={ movie.id }/>)}
    
  </div>
  )
};

export default MoviePopularList;
