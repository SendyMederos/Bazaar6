import axios from "axios";
export default {

   /// saves a user 
    saveOrder: function(userData) {
      console.log()
      return axios.post("/api/posts", userData);
    },
      // Gets all users
      getOrders: function() {
        return axios.get("/api/posts/");
      },
      // Gets the user with the given id
      getOrder: function(id) {
        return axios.get("/api/posts/" + id);
      },
      // Deletes the user with the given id
      deleteOrder: function(id) {
        return axios.delete("/api/posts" + id);
      }
};