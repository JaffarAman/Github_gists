import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getMethod = (relativesUrl) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/${relativesUrl}`)
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { getMethod };
