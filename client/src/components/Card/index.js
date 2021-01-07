import { Domain } from '@material-ui/icons';
import React from 'react';
import './style.css';
import { Link } from 'react-router-dom'
import UserAPI from '../../utils/UserAPI';
let ids=[];


export function MediaCard({product, addToCart }) {
	let id = product._id
	function  updateId ()  {
		UserAPI.getUser().then(res=> {
			ids = res.data.wishList
		}).then(console.log(ids), ids.push(id))
		.then(UserAPI.updateUser({ "wishList": ids }))
		alert("This item has been added to your cart")
	}
	
	return (
		<div className="wrapper">
			<div className="card">
				<img
					src={product.image[0]} alt=""/>
				<div className="info">
					<h1>{product.productName}</h1>
					<p>{product.description}</p>
					<h4 className="float-right">${product.price}</h4>
					<button className="cart" onClick={updateId}><i className="fa fa-shopping-cart" aria-hidden="true"/>
						Add to cart
					</button>
					<Link to={"/product/" + product._id}><button className="more"><i className="fa fa-info" aria-hidden="true"/> More Info</button></Link>
				</div>
			</div>
		</div>
	);
}