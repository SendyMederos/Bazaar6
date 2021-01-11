import { Search, SearchRounded } from "@material-ui/icons";
import http from '../services/http';

const path = "/api/products"

export const saveProduct = (productData) => {
  return http.post(`${path}`, productData)
}

export const getProducts = () => {
  return http.get(`${path}`)
}

export const getProduct = (id) => {
  return http.get(`${path}/${id}`)
}

export const deleteProduct = (id) => {
  return http.delete(`${path}/${id}`)
}