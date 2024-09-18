import { Swiper, SwiperSlide } from "swiper/react"
import { Block } from "../../../shared/ui/Block"
import { Product } from "../../../entitites/product/ui/Product"
import 'swiper/css';
import { useEffect, useRef, useState } from "react";
import { Button } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ListProduct = ({headText, loadProduct}) => {
    const swiperContainer = useRef(null)
    const dataProducts = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    useEffect(() => {
        
    }, [])

    return (
        <div data-aos="fade-zoom-in" data-aos-delay="300" data-aos-offset="0" >
            <p className='text-3xl font-semibold text-gray-600 mb-4'>{headText}</p>
            <div className="relative">
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
                <Button className="absolute -left-3 bottom-1/2 z-10 px-2 max-md:hidden" shape="circle" onClick={() => swiperContainer.current.swiper.slidePrev()}><ChevronLeft /></Button>
                <Button className="absolute -right-3 bottom-1/2 z-10 px-2 max-md:hidden"  shape="circle"  onClick={() => swiperContainer.current.swiper.slideNext()}><ChevronRight /></Button>
            </div>
        </div>
        
    )
}