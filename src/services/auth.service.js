import axios from 'axios';

const napsterAPI = 'https://api.napster.com';
const APIKEY = import.meta.env.VITE_APP_NAPSTER_API_KEY
const API_URL = `${napsterAPI}/oauth/`;

const REDIRECT_URI = 'https://developer.napster.com/jsfiddle_proxy';

const register = (username, email, password) => {
  return axios.post(API_URL + "token", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
