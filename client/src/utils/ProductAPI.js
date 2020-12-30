import axios from "axios";

const path = "/api/products"

export const saveProduct = (userData) => {
  return axios.post(`${path}`, userData)
}

export const getProducts = () => {
  return axios.get(`${path}`)
}

export const getProduct = (id) => {
  return axios.get(`${path}/${id}`)
}

export const deleteProduct = (id) => {
  return axios.delete(`${path}/${id}`)
}