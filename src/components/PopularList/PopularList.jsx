import MainCard from "../MainCard/index.jsx";
import "./index.scss";
// import styles from "./index.module.scss";

const PopularList = ({ title, cardList, }) => {


 return (
    <div className="popularList">
      <h2>{title}</h2>
      <div className="popularList__card">
        {cardList.map(movie => (
          <MainCard
            cardList={ movie }
            cardStyle={{ width: "200px", height: "100px", fontSize: "15px" }}
            key={ movie.id }
          />
        ))
      }
      </div>
    </div>
  );
};

export default PopularList;
