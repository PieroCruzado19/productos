import axios from "axios";

const api = axios.create({
  baseURL: "https://productos.pythonanywhere.com/api/",
});

export default api;
