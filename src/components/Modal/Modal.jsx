import styles from "./index.module.scss";
import { useDispatch } from 'react-redux'

const Modal = ({ movieCardData }) => {
  const { title, vote_average, poster_path } = movieCardData;
  console.log(movieCardData);
  const dispatch = useDispatch();


  return (
    <div className={styles.Main} >
      <div className={styles.Overlay} onClick={() => dispatch({type:'SET_MODAL_INVISIBLE'})}/>
      <div className={styles.Content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.rating}>{vote_average}</p>
        <img
          className={styles.Image}
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Modal;
