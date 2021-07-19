import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';

const getListOfWebsites = async () => {
  const url = `${Login.URL}/data?action=getData&table=sites`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

const getWebsiteClassification = async () => {
  const url = `${Login.URL}/site?action=get_site_types`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

const getListPHP = async () => {
  const url = `${Login.URL}/site?action=GetPHPVersion`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getListOfWebsites, getWebsiteClassification, getListPHP };
