import axios from "axios";
import { toast } from "react-toastify";
import { getJwt } from "./authService";
import logger from "./logService";

axios.defaults.headers.common["x-auth-token"] = getJwt();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    toast.error("An unexpected error occurred.");
  }
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
