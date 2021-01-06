import React from 'react';
import './style.css';

export function MediaCard({product}) {
console.log(product)
	return (
		<div className="wrapper">
			<div className="card">
				<img
					src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" alt=""/>
				<div className="info">
					<h1>Mountain</h1>
					<p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
					<h4 className="float-right">$200</h4>
					<button className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"/>
						Add to cart
					</button>
					<button className="more"><i className="fa fa-info" aria-hidden="true"/> More Info</button>
				</div>
			</div>
		</div>
	);
}