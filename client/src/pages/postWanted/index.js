import React, { useState } from "react";
import {makeStyles, useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    boxSizing: "border-box",
    backgroundColor: "white",
    border: "10%",
    borderRadius: "10%",
    padding: "10%",
    fontFamily: "Arial, Helvetica"


  },
  input: {
    width: "100%"
  }
}))

export function PostWanted(props) {
  const [productName, setProductName] = useState("");
  const [targetPrice, setTargetPrice] = useState("");
  const [category, setCategory] = useState("");
  const [addNotes, setAddNotes] = useState("");
  
  const classes = useStyles();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${productName}`)
    fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify({ productName, targetPrice, category, addNotes }),
      headers: { 'Content-Type': 'application/json'}
    })

  }
  return (
    <div className={classes.root} >
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Product Name:</label>
        <input
            className={classes.input}
            type="text"
            value={productName}
            onChange={e => setProductName(e.target.value)}
          />

      </div>
      <div className="form-group">
      <label>Targeted Price:</label>
          
        <input
            className={classes.input}
            type="text"
            value={targetPrice}
            onChange={e => setTargetPrice(e.target.value)}
          />
      </div>
      <div className="form-group">
      <label>Product Category:</label>
        <select 
          className={classes.input}
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
          >
            <option selected value="select-category">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="appliances">Appliances</option>
            <option value="lawn-and-garden">Lawn and Garden</option>
            <option value="furniture">Furniture</option>
            <option value="auto-parts">Auto Parts</option>
            <option value="tools">Tools</option>
            <option value="video-games">Video Games</option>
          </select>
      </div>
      <div className="form-group">
      <label >Additional Notes for Sellers:</label>
        <textarea
            className={classes.input}
            type="text"
            value={addNotes}
            onChange={e => setAddNotes(e.target.value)}
          />
      </div>
      <div className="form-group">
        <input type="submit" value="Create Wanted Ad" className="btn btn-success btn-block" />
      </div>
    </form>
    </div>
  );
}