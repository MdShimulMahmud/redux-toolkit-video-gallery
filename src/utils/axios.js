import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://redux-toolkit-video-gallery-json-server.onrender.com",
});

export default axiosInstance;
