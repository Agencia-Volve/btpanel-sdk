import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';
import { diskInfoType } from '../types';

const getDiskInfo = async (): Promise<diskInfoType[]> => {
  const url = `${Login.URL}/system?action=GetDiskInfo`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getDiskInfo };
