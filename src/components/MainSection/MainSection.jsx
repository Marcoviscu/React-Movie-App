import { useState, useEffect } from "react";
import PopularList from "../PopularList";
import MainCard from "../MainCard"
import { GET } from "../../utils/api.js";
import './index.scss';
import TopRatedList from "../TopRatedList";

const MainSection = () => {
    const [movieLists,setMovieLists] = useState({});

    useEffect(() => {
        GET("movie", "popular", "&language=en-US&page=1")
        .then((data) => setMovieLists((prev) => ({ ...prev, popular: data.results }))
        );

        GET('movie', 'top_rated', '&language=en-US&page=1')
        .then((data) => setMovieLists(prev => ({ ...prev, top_rated: data.results })));

        GET("movie", "popular", "&language=en-US&page=1")
        .then((data) => setMovieLists(prev => ({ ...prev, popular: data.results })));
      }, []);

    return (
        <div className="MainSection">
            MAIN SECTION
            {movieLists.upcoming && <MainCard cardData={movieLists.upcoming[4]}/> }

            {movieLists.popular && <TopRatedList 
                title="Most Popular"
                cardList={ movieLists.popular }
            />}

            { movieLists.topRated && <TopRatedList
                                        title="Top Rated"
                                        cardList={ movieLists.topRated.filter(movie => movie.vote_average>=8.6) }
                                    />}    
        </div>
    )
}

export default MainSection;