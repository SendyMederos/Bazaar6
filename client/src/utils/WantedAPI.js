import http from '../services/http';

const path = "/wanted"

export const saveWanted = (wantedAd) => {
  return http.post(`${path}`, wantedAd)
}

export const getWanted = () => {
  return http.get(`${path}`)
}

export const deleteWanted = (id) => {
  return http.delete(`${path}/${id}`)
}