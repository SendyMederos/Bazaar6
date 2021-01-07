import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'

export function MediaCard({product}) {
	let id = product._id
	return (
		<div className="wrapper">
			<div className="card">
				<img
					src={product.image[0]} alt=""/>
				<div className="info">
					<h1>{product.productName}</h1>
					<p>{product.description}</p>
					<h4 className="float-right">${product.price}</h4>
					<button className="cart"><i className="fa fa-shopping-cart" aria-hidden="true"/>
						Add to cart
					</button>
					<Link to={"/product:" + product._id}><button className="more"><i className="fa fa-info" aria-hidden="true"/> More Info</button></Link>
				</div>
			</div>
		</div>
	);
}