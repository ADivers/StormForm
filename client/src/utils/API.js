import axios from "axios";

export default {
  // Gets all users
  // getUsers: function() {
  //   return axios.get("/api/users");
  // },
  // // Gets the user with the given id
  // getUser: function(id) {
  //   return axios.get("/api/users/" + id);
  // },
  // // Deletes the user with the given id
  // deleteUser: function(id) {
  //   return axios.delete("/api/users/" + id);
  // },
  // // Saves a user to the database
  // saveUser: function(userData) {
  //   return axios.post("/api/users", userData);
  // },
  authenticate: function(userData) {
    console.log(userData);
    return axios({
      method: 'post',
      url: 'users/login',
      port: 3001,
      data: userData
    });
  },
  validate: function(userData) {
    return axios({
      method: 'post',
      url: 'users/register',
      port: 3001,
      data: userData
    });
  },
  logout: function() {
    return axios({
      method: 'get',
      url: 'users/logout',
      port: 3001
    });
  }
};

// axios({
//   method: 'post',
//   url: 'users/login',
//   data: userData,
//   proxy: {
//     host: '127.0.0.1',
//     port: 3001,
//   }
// }),
