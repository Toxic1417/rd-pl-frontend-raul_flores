import axios from 'axios'

const url = 'https://rd-pl-api-raul-flores.onrender.com'

const client = axios.create({
  baseURL: url,
  timeout: 10000,
  headers: {},
})

export default client
