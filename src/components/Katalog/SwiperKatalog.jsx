import s from "./SwiperKatalog.module.css"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export const SwiperKatalog = () => {
    return (
        <>
            <Swiper
                loop={true}
                slidesPerView={2}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className={s.swiperSlide}>
                    <div className={`${s.SwiperImg} ${s.backColorS}`}>
                        <img src="/images/8434efc9a 1.png" alt="" />
                        <span className={s.text}>Giga</span>
                        <div className={s.Div}>
                            <span className={s.text}>25 000₽</span>
                            <label className={s.label}><input type="checkbox" /><span></span></label>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiperSlide}>
                    <div className={`${s.SwiperImg} ${s.backColorF}`}>
                        <img src="/images/PGIA77 2.png" alt="" />
                        <span className={s.text}>Polar model</span>
                        <div className={s.Div}>
                            <span className={s.text}>10 000₽</span>
                            <label className={s.label}><input type="checkbox" /><span></span></label>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={s.swiperSlide}>
                <div className={s.SwiperImg}>
                        <img src="/images/i (3) 1.png" alt="" />
                        <span className={s.text}>Ray Bay</span>
                        <div className={s.Div}>
                            <span className={s.text}>25 000₽</span>
                            <label className={s.label}><input type="checkbox" /><span></span></label>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}