import MainCard from "../MainCard";
import "./index.scss";

const TopRatedList = ({ title, cardList}) => {
    return (
        <div className="TopRatedList">
            <h1 className="TopRatedList--title">{ title } </h1>
            <div className="TopRatedList--list">
                {cardList.map(movie => (
                    <MainCard cardData= { movie }
                    cardStyle= {{width: '200px', height: '70px', fontSize: '16px' }}
                    key={ movie.id } 
                    />
                ))
            }
            </div>
        </div>

    )
}

export default TopRatedList;