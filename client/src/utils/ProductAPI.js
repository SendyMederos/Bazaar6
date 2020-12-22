import axios from "axios";
export default {

   /// saves a user 
    saveProduct: function(userData) {
      console.log()
      return axios.post("/api/products", userData);
    },
      // Gets all users
      getProducts: function() {
        return axios.get("/api/products/");
      },
      // Gets the user with the given id
      getProduct: function(id) {
        return axios.get("/api/products/" + id);
      },
      // Deletes the user with the given id
      deleteProduct: function(id) {
        return axios.delete("/api/products" + id);
      }
};