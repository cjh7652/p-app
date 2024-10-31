import React from 'react';
import MainSlider from '../componenets/MainSlider';
import Best from '../componenets/Best';
import FreshBox from '../componenets/FreshBox';
import New from '../componenets/New';
import Products from '../componenets/Products'

const MainPage = () => {
	return (
		<div>
			<section className='section01'>
				<MainSlider />
			</section>
			<section className='section02'>
				<Best />
			</section>
			<section className="section03">
				<FreshBox />
			</section>
			<section className="section04">
				<New />
			</section>
			<section className="section05">
				<Products />
			</section>
		</div>
	);
};

export default MainPage;