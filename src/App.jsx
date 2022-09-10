import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import styles from './App.module.scss';


function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <MainSection/>
    </div>
  );
}

export default App;
