import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-vintage-clone-25.cloudfunctions.net/api",
});

export default instance;
