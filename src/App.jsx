import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from './components/Footer'
import styles from './App.module.scss';


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <MainSection/>
      <Footer/>
    </div>
  );
}

export default App;
