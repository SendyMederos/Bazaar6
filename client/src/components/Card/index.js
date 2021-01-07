import { Domain } from '@material-ui/icons';
import React from 'react';
import './style.css';
<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
import { Link } from 'react-router-dom'
>>>>>>> d7cb1e407cd4b3e263e7e422c32bf9079b86179f

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
<<<<<<< HEAD
					<Link to={"/product/" + product._id}>
					<button className="more"><i className="fa fa-info" href="" aria-hidden="true"/> More Info</button>
					</Link>
=======
					<Link to={"/product:" + product._id}><button className="more"><i className="fa fa-info" aria-hidden="true"/> More Info</button></Link>
>>>>>>> d7cb1e407cd4b3e263e7e422c32bf9079b86179f
				</div>
			</div>
		</div>
	);
}