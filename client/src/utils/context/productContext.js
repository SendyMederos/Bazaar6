import React from "react";

const ProductContext = React.createContext({
  productName: "",
  description: "",
  price:"",
  image:[],
  category:"",
  saveProduct: () => {},
  seeProduct:  () => {}
});

export default LanguageContext;
