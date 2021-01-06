import axios from "axios";
export default {

   /// saves a user 
    savePost: function(postData) {
      return axios.post("/api/posts", postData);
    },
      // Gets all users
      getPosts: function() {
        return axios.get("/api/posts/");
      },
      // Gets the user with the given id
      getPost: function(id) {
        return axios.get("/api/posts/" + id);
      },
      // Deletes the user with the given id
      deletePost: function(id) {
        return axios.delete("/api/posts" + id);
      }
};