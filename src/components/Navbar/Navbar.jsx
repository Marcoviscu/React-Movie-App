import styles from "./index.module.scss";
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return <div className={styles.Navbar}>
            <div><FaReact className={styles.Logo}/></div>
            <ul className={styles.AnchorWrapper}>
              <li><a href=''>Movies</a></li>
              <li><a href=''>About</a></li>
            </ul>
        </div>;
};

export default Navbar;
