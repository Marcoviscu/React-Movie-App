import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from './components/Footer'
import styles from './App.module.scss';
import Modal from "./components/Modal";
import {useSelector} from 'react-redux';

function App() {
 const {modal} = useSelector(state => state)



  return (
    <div className={styles.App}>
      <Navbar/>
      { modal.isModalVisible && <Modal movieCardData={modal.modalData}/>}
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
