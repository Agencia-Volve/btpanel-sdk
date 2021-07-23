import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';
import { updatePanel } from '../types';

const getPanelUpdate = async (): Promise<updatePanel> => {
  const url = `${Login.URL}/ajax?action=UpdatePanel`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result;
};

export { getPanelUpdate };
