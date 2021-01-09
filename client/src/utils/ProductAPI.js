import axios from "axios";

const path = "/api/products"

export const saveProduct = (productData) => {
  return axios.post(`${path}`, productData)
}

export const getProducts = () => {
  console.log("axios")

  return axios.get(`${path}`)
}

export const getProduct = (id) => {
  return axios.get(`${path}/${id}`)
}

export const deleteProduct = (id) => {
  return axios.delete(`${path}/${id}`)
}
