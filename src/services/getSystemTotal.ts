import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';

const { BT_PANEL } = process.env;

const getSystemTotal = async () => {
  const url = `${BT_PANEL}/system?action=GetSystemTotal`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getSystemTotal };
