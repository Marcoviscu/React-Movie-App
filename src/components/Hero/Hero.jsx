
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Pagination, Navigation } from "swiper";

     
import styles from './index.module.scss';




const Hero = ({heroData}) => {


    return ( 
        <div className={styles.Hero}>
        <Swiper
        index={0}
        slidesPerView={1}
        spaceBetween={30}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {heroData && heroData.map((movie) => <SwiperSlide className= {styles.HeroCard}key={movie.id}><h1 className={styles.Title}>{movie.title}</h1><img className={styles.Img}src={`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`} alt='image'></img> </SwiperSlide>)}
      </Swiper>
        </div>
    )


}



export default Hero;
