import styles from "./index.module.scss";
import { FaReact } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'



const Navbar = () => {
  
  return <div className={styles.Navbar}>
            <div className={styles.Container}>
              <FaReact className={styles.Logo}/>
              <ul className={styles.AnchorWrapper}>
              <li><a>Movies</a></li>
              <li><a>About</a></li>
              </ul>
            </div>
            <div className={styles.InputSearchContainer}>
              <AiOutlineSearch className={styles.Logo}/>
            </div>
        </div>;
};

export default Navbar;
