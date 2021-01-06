import axios from "axios";

const path = "/api/products"

export const saveProduct = (userData) => {
  return axios.post(`${path}`, userData)
}

export const getProducts = () => {
  console.log("axios")

  return axios.get(`${path}`)
}

export const getCategoryProducts = (category) => {
  console.log(category)
  return axios.get(`${path}/${category}`)
}

export const getProduct = (id) => {
  return axios.get(`${path}/${id}`)
}

export const deleteProduct = (id) => {
  return axios.delete(`${path}/${id}`)
}
