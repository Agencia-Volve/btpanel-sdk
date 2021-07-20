import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';
import { listOfWebsitesType, websiteClassificationType, listPHPType } from '../types';

const getListOfWebsites = async (): Promise<listOfWebsitesType> => {
  const url = `${Login.URL}/data?action=getData&table=sites`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

const getWebsiteClassification = async (): Promise<websiteClassificationType[]> => {
  const url = `${Login.URL}/site?action=get_site_types`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

const getListPHP = async (): Promise<listPHPType[]> => {
  const url = `${Login.URL}/site?action=GetPHPVersion`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getListOfWebsites, getWebsiteClassification, getListPHP };
