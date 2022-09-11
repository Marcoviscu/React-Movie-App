import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Grid,Scrollbar } from "swiper";


const CardList = ({cardListData}) => {

  
 return (
  
  <div className={styles.CardList}>
  <Swiper
  slidesPerView={2}
  grid={{
    rows: 1,
  }}
  spaceBetween={5}
  pagination={{
    clickable: true,
  }}
  scrollbar={{hide:true}}
  modules={[Scrollbar,Grid]}
  className={styles.mySwiper}
>


      <div className={styles.container}>
        <div className={styles.TopRatedList}>
          {cardListData && cardListData.map(movie => <SwiperSlide key={movie.id} className={styles.CardListCard}><h1 className={styles.Title}>{ movie.title}</h1><img className={styles.Img}src={`https://image.tmdb.org/t/p/original${ movie.backdrop_path }`} alt='image'></img> </SwiperSlide>)}
        </div>
      </div>
    </Swiper>
  </div>
  )
};

export default CardList;
