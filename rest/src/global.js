import axios from "axios";

const globalAxios = axios.create({
  baseURL: "http://localhost:3000",
  headers: { Accept: "application/json" },
});

export default globalAxios;
