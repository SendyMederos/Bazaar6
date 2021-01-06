import axios from "axios";

const path = "/api/wanted"

export const saveWanted = (wantedData) => {
  return axios.post(`${path}`, wantedData)
}

export const getWanted = () => {
  return axios.get(`${path}`)
}

export const deleteWanted = (id) => {
  return axios.delete(`${path}/${id}`)
}