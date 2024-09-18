import { Swiper, SwiperSlide } from "swiper/react"
import { Block } from "../../../shared/ui/Block"
import { Product } from "../../../entitites/product/ui/Product"
import 'swiper/css';
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";

export const ListProduct = ({headText, loadProduct}) => {
    const swiperContainer = useRef(null)
    const dataProducts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <p className='text-3xl font-semibold text-gray-600 mb-4'>{headText}</p>
            <div>
                <Swiper
                    ref={swiperContainer}
                    slidesPerView={1}
                    spaceBetween={8}
                    breakpoints={{
                        1025: { slidesPerView: 4, spaceBetween: 24},
                        691: {slidesPerView: 3, spaceBetween: 16},
                        435: { slidesPerView: 2, spaceBetween: 12 }
                    }}
                >
                    {dataProducts.map(item => (
                        <SwiperSlide className="pb-4">
                            <Product />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="relative top-0 bottom-0 z-10">
                    <Button className="ab" onClick={() => swiperContainer.current.swiper.slidePrev()}></Button>
                    <Button onClick={() => swiperContainer.current.swiper.slideNext()}></Button>
                </div>
            </div>
        </div>
        
    )
}