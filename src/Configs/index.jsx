import axios from "axios";
import { WEB_API } from '../../env'

axios.defaults.baseURL = WEB_API

axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    throw error
  }
)