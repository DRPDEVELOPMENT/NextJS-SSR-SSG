import axios from "axios";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});
const apiClient = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": true,
  },
});

export default apiClient;
