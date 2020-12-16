import Vue from 'vue'
import axios from 'axios'

const baseURL = process.env.PROD ? 'https://jobboardback.herokuapp.com' : 'http://localhost:5000'

Vue.prototype.$axios = axios.create({
  baseURL: baseURL
})
