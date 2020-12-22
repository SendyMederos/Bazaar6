import axios from "axios";

export default {
  
    saveUser: function(userData) {
      console.log()
      return axios.post("/api/users", userData);
    }
};