import { endPoint } from "../settings/urls";
import axios from "axios";

export function listRivews(params) {
  let _url = "http://localhost:6060/review/get";
  return axios.get(_url, params);
}
