import styles from "./index.module.scss";
import { FaReact } from 'react-icons/fa';

const Navbar = () => {
  return <div className={styles.Navbar}>
            <div><FaReact className={styles.Logo}/></div>
            <ul className={styles.AnchorWrapper}>
              <li><a href=''>Home</a></li>
              <li><a href=''>Film</a></li>
              <li><a href=''>About</a></li>
            </ul>
            NAVBAR
        </div>;
};

export default Navbar;
