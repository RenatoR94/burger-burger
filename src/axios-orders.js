import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-app-af1ca-default-rtdb.firebaseio.com'
});

export default instance;
