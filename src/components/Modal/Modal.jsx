import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";

const Modal = ({ movieCardData }) => {
  const { title, vote_average, poster_path, overview } = movieCardData;
  console.log(movieCardData);
  const dispatch = useDispatch();

  return (
    <div className={styles.Main}>
      <div
        className={styles.Overlay}
        onClick={() => dispatch({ type: "SET_MODAL_INVISIBLE" })}
      />
      <div className={styles.Wrapper}>
        <span className={styles.remove}>
          <GiCancel onClick={() => dispatch({ type: "SET_MODAL_INVISIBLE" })} />
        </span>
        <span className={styles.title}>
          <h1>{title}</h1>
        </span>

        <div className={styles.Content}>
          <div>
            <img
              className={styles.Image}
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="image"
            />
            
          </div>
          <div className={styles.overview}>

            <p >{overview}</p><p className={styles.rating}>
              Rating:{vote_average}
              <AiFillStar />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
