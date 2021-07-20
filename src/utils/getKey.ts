import { DateTime } from 'luxon';
import { Md5 } from 'ts-md5/dist/md5';
import { Login } from './login';
import { getKeysType } from '../types/index';

const getKeyData = async () => {
  const time = DateTime.now().toFormat('X');
  const format: number = JSON.parse(time);

  const data: getKeysType = {
    request_token: Md5.hashStr(`${format}${Md5.hashStr(Login.secret_key)}`),
    request_time: format,
  };

  return data;
};

export default getKeyData;
