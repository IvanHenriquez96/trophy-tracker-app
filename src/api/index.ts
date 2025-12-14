import axios from "axios";

//create an axios instance
const rawgApi = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d6b68a1ab5904c4c97ac3323332bf21b",
  },
});

export default rawgApi;
