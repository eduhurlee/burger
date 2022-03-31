import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-d9fb5-default-rtdb.firebaseio.com/"
});

export default instance;
