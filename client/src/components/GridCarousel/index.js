import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { MediaCard } from "../Card";
<<<<<<< HEAD

import "./style.css";

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

=======
import "./style.css";

>>>>>>> 45cc43aff8eb7ab1b194a954d4d2209ba3df460d
const Arrow = ({ text, className }) => {
	return (<div className={className}>
		{text}
	</div>)
}

const ArrowLeft = Arrow({ text: <i className="fa fa-arrow-circle-left fa-3x" />, className: "arrow-prev" })
const ArrowRight = Arrow({ text: <i className="fa fa-arrow-circle-right fa-3x" />, className: "arrow-next" })

export const GridCarousel = ({ items, addToUser, categoryName }) => {
	let [selectedState, setSelectedState] = useState(selected)
	const selected = (items[0] || { name: 'item0' }).name
	const Grid = (items, selected) => {
		return items.map((item, index) => {
			return (<MediaCard key={index} product={item} addToUser={addToUser} />)
		});
	}

	const onSelect = (key) => {
		setSelectedState(key)
	}

	return (<>
		<div className="grid-carousel"  >
			<h1 style={{ color: "black", textShadow: "5px 5px 10px darkolivegreen", paddingLeft: "3%" }}>{categoryName}</h1>
			<ScrollMenu
				data={Grid(items, selectedState)}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				selected={selectedState}
				onSelect={onSelect}
				translate={-2}
				wheel={false}
			/>
		</div>
	</>);
}