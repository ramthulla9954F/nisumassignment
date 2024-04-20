import axios from "axios";
import { BASE_URL } from "@/constants/index";

function _post(url, headers, data) {
  const options = {
    method: "POST",
    headers: headers.headers,
    body: JSON.stringify(data),
  };
  return axios
    .post(url, data, headers)
    .then((r) => {
      return r;
    })
    .catch((error) => console.log("ERROR", error));
}

function _get(url, headers) {
  const options = { method: "GET", headers: headers.headers };
  return axios.get(url, options).then((r) => {
    return r;
  });
}

function _do_call(type, url, headers = {}, data = {}) {
  url = `${BASE_URL + url}`;
  switch (type) {
    case "POST":
      return _post(url, headers, data);
    case "GET":
      return _get(url, headers);
    case "PUT":
      break;
  }
}

const HttpCalls = { _do_call, _post, _get };

export default HttpCalls;
