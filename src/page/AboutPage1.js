/* import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {DataContext} from '../App'; */

const AboutPage1 = ({data}) => {
	/* let {id} =useParams();
	console.log(id);
	const {petdata} = useContext(DataContext)
	console.log(petdata); */
	return (
		<div>
			{/* {petdata[id].title} */}
			{data.title}
		</div>
	);
};

export default AboutPage1;