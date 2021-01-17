import axios from "axios";

const instance = axios.create({
  baseURL: "https://stripe-payments-gateway.herokuapp.com/",
});

export default instance;
