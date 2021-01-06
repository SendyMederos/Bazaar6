import React from 'react';
import './style.css';

export function MediaCard({product}) {
	return (
		<div className="wrapper">
			<div className="card">
				<img
					src={product.image} alt=""/>
				<div className="info">
					<h1>{product.productName}</h1>
					<p>{product.description}</p>
					<h4 className="float-right">${product.price}</h4>
					<button className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"/>
						Add to cart
					</button>
					<button className="more"><i className="fa fa-info" aria-hidden="true"/> More Info</button>
				</div>
			</div>
		</div>
	);
}