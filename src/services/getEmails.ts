import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';
import { mailListType, specificMailListType } from '../types';

const getMailList = async (): Promise<mailListType> => {
  const url = `${Login.URL}/plugin?action=a&name=mail_sys&s=get_domains`;

  const data = await getKeyData();

  const result = await httpRequest(url, data);

  return result.msg;
};

const getSpecificMailList = async (domain): Promise<specificMailListType> => {
  const url = `${Login.URL}/plugin?action=a&name=mail_sys&s=get_mailboxs`;

  const data = await getKeyData();
  data['domain'] = await domain;

  const result = await httpRequest(url, data);

  return result;
};

const editSpecificMail = async (email, password, full_name, active, is_admin, quota) => {
  const url = `${Login.URL}/plugin?action=a&name=mail_sys&s=update_mailbox`;

  const data = await getKeyData();
  data['username'] = await email;
  data['password'] = await password;
  data['full_name'] = await full_name;
  data['active'] = await active;
  data['is_admin'] = await is_admin;
  data['quota'] = await quota;

  const result = await httpRequest(url, data);

  return result;
};

export { getMailList, getSpecificMailList, editSpecificMail };
