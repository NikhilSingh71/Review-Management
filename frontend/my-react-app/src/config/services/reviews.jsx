import { endPoint } from "../settings/urls";
import axios from "axios";

export function listRivews(params) {
  let _url = "http://localhost:6060/review/get";
  return axios.get(_url, params);
}

export function addReview(params) {
  let _url = "http://localhost:6060/review/new";
  return axios.post(_url, params);
}

export function deleteReview(params) {
  let id = params._id;
  let _url = `http://localhost:6060/review/${id}`;
  return axios.delete(_url);
}
