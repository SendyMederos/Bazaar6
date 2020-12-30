import React from 'react';
import './style.css';

export function MediaCard(props) {

  return (
      <div className="wrapper">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" />
          <div class="info">
            <h1>Mountain</h1>
            <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
            <h4 className="float-right">$200</h4>
            <button className="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Add to cart</button>
            <button className="more"><i class="fa fa-info" aria-hidden="true"></i> More Info</button>
          </div>
        </div>
      </div>
  );
}