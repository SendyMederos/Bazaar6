import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { MediaCard } from "../Card";

import "./carousel.css";

const items = [
	{ name: "item0" },
	{ name: "item1" },
	{ name: "item2" },
	{ name: "item3" },
	{ name: "item4" },
	{ name: "item5" },
	{ name: "item6" },
	{ name: "item7" },
	{ name: "item8" },
	{ name: "item9" },
	{ name: "item10" },
	{ name: "item11" },
	{ name: "item12" },
];

// const GridItem = ({ text, selected }) => {
// 	return (<div className={`grid-item ${selected ? 'active' : ''}`}>
// 		{text}
// 	</div>)
// };



const Arrow = ({ text, className }) => {
	return (<div className={className}>
		{text}
	</div>)
}

const ArrowLeft = Arrow({ text: <i class="fa fa-arrow-circle-left fa-3x"></i>, className: "arrow-prev" })
const ArrowRight = Arrow({ text: <i class="fa fa-arrow-circle-right fa-3x"></i>, className: "arrow-next" })



export const GridCarousel = ({items}) => {

	let [ selectedState, setSelectedState ] = useState(selected)

	const selected = (items[0] || { name: 'item0' }).name

	const Grid = (items, selected) => {
		return items.map( (item, index) => {

			return (<MediaCard key={index} product={item} />)
		});
	}

	const onSelect = (key) => {
		setSelectedState(key)
	}

	return (<>
		<div className="grid-carousel">
			<ScrollMenu
				data={Grid(items, selectedState)}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				selected={selectedState}
				onSelect={onSelect}
				translate={-1}
				wheel={false}
			/>
		</div>
	</>);

}