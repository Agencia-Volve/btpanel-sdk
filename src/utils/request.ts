import axios, { AxiosRequestConfig } from 'axios';

const stringify = require('qs-stringify');

const httpRequest = async (url: string, data) => {
  const dataPost = await stringify(data);

  const config: AxiosRequestConfig = {
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: dataPost,
  };

  const response = await axios(config);
  const json = await response.data;

  return json;
};

export default httpRequest;
