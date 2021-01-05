import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { MediaCard } from "../Card";

import "./carousel.css";
//<i class="fa fa-arrow-circle-left fa-3x"></i>
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

const GridItem = ({ text, selected }) => {
	return (<div className={`grid-item ${selected ? 'active' : ''}`}>
		{text}
	</div>)
};

const Grid = (items, selected) => {
	return items.map( (item, index) => {
		const { name } = item;
		//return (<GridItem text={name} key={name} selected={selected} />)
		return (<MediaCard key={index} />)
	});
}

const Arrow = ({ text, className }) => {
	return (<div className={className}>
		{text}
	</div>)
}

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" })
const ArrowRight = Arrow({ text: ">", className: "arrow-next" })

const selected = (items[0] || { name: 'item0' }).name

export const GridCarousel = (props) => {

	let [ selectedState, setSelectedState ] = useState(selected)

	const onSelect = (key) => {
		setSelectedState(key)
	}

	const marginOffset = props.offset || "78px";

	return (<>
		<div className="grid-carousel" style={{ marginLeft: marginOffset }}>
			<ScrollMenu
				data={Grid(items, selectedState)}
				arrowLeft={ArrowLeft}
				arrowRight={ArrowRight}
				selected={selectedState}
				onSelect={onSelect}
			/>
		</div>
	</>);

}