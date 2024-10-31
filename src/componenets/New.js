import React, {useState} from 'react';
import Card1 from './Card1';
import data1 from '../data/data1';
/* import {Link} from 'react-router-dom'; */

import { Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 

import './New.scss';

const New = () => {
	let [adddata] = useState(data1)
	return (
		<div className='newboxWrap'>
			<h2>Location</h2>
			<p>Location is</p>
			<div className="newslider">
			<Swiper className='newboxswiper'
			modules={[Navigation, Autoplay]}
			spaceBetween={5}
			slidesPerView={4}
			navigation
			loop={true}
			autoplay={{
				delay: 0, 
				disableOnInteraction: false,
			}}
			speed={5000}
			loopAdditionalSlides={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			>
				{
					adddata.map((data, i) =>{
						return (
							<SwiperSlide key={i}>
								<Card1 data={data}  i={i}/>
							</SwiperSlide>
						)
					})
				}
				
			</Swiper>
			</div>
		</div>
	);
};

export default New;