import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 0aab95c1c79478132d1eb9de29a3dae96781cbf700f059ffeddcaa0effc79476"
  }
});
