import axios from "axios";
const axiosInstance = axios.create({
  baseURL:
    "http://localhost:9000" ||
    "https://redux-toolkit-video-gallery-json-server.onrender.com",
});

export default axiosInstance;
