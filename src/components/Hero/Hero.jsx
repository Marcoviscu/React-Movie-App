
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";

     
import styles from './index.module.scss';

import {useDispatch} from 'react-redux';



const Hero = ({heroData}) => {

  const dispatch = useDispatch();
  const onHandleModal = (movie) => {
    dispatch({type: 'SET_MODAL_VISIBLE'})
    dispatch({type: 'SET_MODAL_DATA', payload: movie})
}

    return ( 
        <div className={styles.Hero}>
        <Swiper

        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{delay: 5000}}
        className={styles.mySwiper}
      >
        {heroData && heroData.map((movie) => <SwiperSlide className= {styles.HeroCard}key={movie.id}><h1 className={styles.Title}>{movie.title}</h1><img onClick={() => onHandleModal(movie)} className={styles.Img}src={`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`} alt='image'></img> </SwiperSlide>)}
      </Swiper>
        </div>
    )


}



export default Hero;
