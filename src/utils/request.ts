import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

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

  const response: AxiosResponse = await axios(config);

  return response.data;
};

export default httpRequest;
