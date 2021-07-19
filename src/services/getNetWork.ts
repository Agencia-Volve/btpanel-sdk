import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';

const getNetWork = async () => {
  const url = `${Login.URL}/system?action=GetNetWork`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getNetWork };
