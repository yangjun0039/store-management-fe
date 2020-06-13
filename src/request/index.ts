import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.VUE_APP_URL,
  headers: {
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 5000
})

axios.interceptors.request.use(config => {

  return config
})

export default axios
