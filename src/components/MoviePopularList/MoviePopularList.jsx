import styles from "./index.module.scss";
import MovieCard from "../MovieCard";



const MoviePopularList = ({moviePopularList}) => {


 return (
  <div classname={styles.container}>
    <div className={styles.PopularList}>
    {moviePopularList && moviePopularList.map( movie => <MovieCard movieCardData={ movie } key={ movie.id }/>)}
    
    </div>
  </div>
  )
};

export default MoviePopularList;
