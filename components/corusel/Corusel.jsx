"use client";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./style.scss";

import { corusel } from "./constants";
import Image from "next/image";

export const Corusel = () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
			slidesPerView={1}
			navigation
			loop={true}
			autoplay={true}
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			className='swiper_class'
		>
			{corusel.map(({ id, src, bg_image }) => {
				return (
					<SwiperSlide
						key={id}
						className='swiper_class'
					>
						<div className='carousel_image_container'>
							<Image
								src={src}
								className='swiper_class_img'
								alt=''
							/>
						</div>
						<div
							className='bg_image'
							style={{
								background: `url(${bg_image.src})`,
								backgroundRepeat: "no-repeat",
								backgroundSize: "cover",
							}}
						></div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};
