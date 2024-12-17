import s from "./SwiperKatalog.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";

export const SwiperKatalog = () => {
    // Массив с данными для каждого продукта
    const products = [
        {
            id: 7,
            name: 'Giga',
            price: '25 000₽',
            img: '/images/8434efc9a 1.png',
        },
        {
            id: 8,
            name: 'Polar model',
            price: '10 000₽',
            img: '/images/PGIA77 2.png',
        },
        {
            id: 9,
            name: 'Ray Bay',
            price: '25 000₽',
            img: '/images/i (3) 1.png',
        },
    ];

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

                {products.map((product) => (
                    <SwiperSlide key={product.id} className={s.swiperSlide}>
                        <Link to={`/Katalog/${product.id}`} className={`${s.SwiperImg} ${s.backColorS}`}>
                            <img src={product.img} alt={product.name} />
                            <span className={s.text}>{product.name}</span>
                            <div className={s.Div}>
                                <span className={s.text}>{product.price}</span>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
