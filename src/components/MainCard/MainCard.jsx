import "./index.scss";


const MainCard = ({ cardData, cardStyle }) => {
    const { title, vote_average, poster_path} = cardData;

    return ( 
        <div className = "MainCard" style ={ cardStyle }>
            <img className = "MainCard--img" src={`https://image.tmdb.org/t/p/w342${ poster_path }`} alt={title} />
            <div className="MainCard__text">
                <h3>{ title }</h3>
                <p>{ vote_average }</p>
            </div>
        </div>
    );
};

export default MainCard;