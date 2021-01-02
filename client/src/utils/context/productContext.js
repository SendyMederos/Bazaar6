import React from "react";

const ProductContext = React.createContext({
  product:{},
  products:[],
  saveProduct: () => {},
  seeProduct:  () => {}
});

export default ProductContext;
