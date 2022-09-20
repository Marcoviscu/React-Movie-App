import styles from './index.module.scss'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


const Footer = () => {

    return (
        <div className={styles.Main}>
            <ul className={styles.Ref}>
                <li className={styles.Link}><a href='https://github.com/Marcoviscu'><AiFillGithub/></a></li>
                <li className={styles.Link}><a href='https://www.linkedin.com/in/marco-viscuso/'><AiFillLinkedin/></a></li>
            </ul>
            <h2>Made by Marco Viscuso</h2>
        </div>
    )
}

export default Footer;