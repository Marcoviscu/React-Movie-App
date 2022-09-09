import styles from "./index.module.scss";
import MovieCard from "../MovieCard";



const TopRatedList = ({moviesTopRatedList}) => {


 return (
  <div classname={styles.container}>
    <div className={styles.TopRatedList}>
    { moviesTopRatedList && moviesTopRatedList.map( movie => <MovieCard movieCardData={ movie } key={ movie.id }/>)}
    
    </div>
  </div>
  )
};

export default TopRatedList;
