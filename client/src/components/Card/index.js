import React from 'react';
import './style.css';
import { borders } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function MediaCard(props) {

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