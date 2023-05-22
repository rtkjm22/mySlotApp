import Axios from "axios";

const axios = Axios.create({
  baseURL: 'http://localhost:3010',
  withCredentials: true
})

export default axios