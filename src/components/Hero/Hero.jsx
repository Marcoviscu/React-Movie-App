
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Pagination, Navigation, EffectFade, Autoplay } from "swiper";

     
import styles from './index.module.scss';




const Hero = ({heroData}) => {


    return ( 
        <div className={styles.Hero}>
        <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
        effect={'fade'}
        loop={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        autoplay={{delay: 3500}}
        className={styles.mySwiper}
      >
        {heroData && heroData.map((movie) => <SwiperSlide className= {styles.HeroCard}key={movie.id}><h1 className={styles.Title}>{movie.title}</h1><img className={styles.Img}src={`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`} alt='image'></img> </SwiperSlide>)}
      </Swiper>
        </div>
    )


}



export default Hero;
