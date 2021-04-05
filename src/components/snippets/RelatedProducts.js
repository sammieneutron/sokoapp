import React from 'react'
import facemask from '../../assets/images/facemask.png'

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Autoplay, Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

const RelatedProducts = () => {
    return (
        <div className="mt-5">
            <div>
                <p className="title">RELATED PRODUCTS</p>
            </div>
            <Swiper
                spaceBetween={40}
                slidesPerView={6}
                navigation
                loop={true}
                autoplay={true}
                breakpoints={{
                    
                    300: {
                        width: 300,
                        slidesPerView: 2,
                    },

                    // 768: {
                    //     width: 768,
                    //     slidesPerView: 3,
                    // },

                    1024: {
                        width: 1024,
                        slidesPerView: 6,
                    },
                }}
            >
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
                <SwiperSlide className="related-item">
                    <img src={ facemask } width="140" alt="" className="br-5"/>
                    <p className="product-name">Kid's 2pk Cloth Face masks</p>
                </SwiperSlide>
            </Swiper>  
        </div>
    )
}

SwiperCore.use([Autoplay, Navigation]);

export default RelatedProducts