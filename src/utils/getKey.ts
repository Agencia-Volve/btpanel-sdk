import { DateTime } from 'luxon';
import { Md5 } from 'ts-md5/dist/md5';
import { getKeysType } from '../types/index';

const { BT_KEY } = process.env;

const getKeyData = async () => {
  const time = DateTime.now().toFormat('X');
  const format: number = JSON.parse(time);

  const data: getKeysType = {
    request_token: Md5.hashStr(`${format}${Md5.hashStr(BT_KEY)}`),
    request_time: format,
  };

  return data;
};

export default getKeyData;
