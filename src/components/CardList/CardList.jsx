import styles from "./index.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import { Pagination, Navigation } from "swiper";


const CardList = ({cardListData}) => {

  
 return (
  
  <div className={styles.CardList}>
  <Swiper
  slidesPerView={2}
  spaceBetween={10}
  slidesPerGroup={2}
  loop={false}
  loopFillGroupWithBlank={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
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
