import axios from "axios"

export const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/jobs',
  timeout: 8000
})