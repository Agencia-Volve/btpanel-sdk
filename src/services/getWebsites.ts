import getKeyData from '../utils/getKey';
import httpRequest from '../utils/request';
import { Login } from '../utils/login';
import {
  listOfWebsitesType, websiteClassificationType, listPHPType, addWebsiteType, deleteWebsiteType, startWebsiteType, stopWebsiteType, webSiteNotesTypes, deleteWebsiteBackupType,
} from '../types';

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

const addWebsite = async (domain: string, port, version, ftp = false, ftp_username = null, ftp_password = null, sql, datauser, datapassword, set_ssl, force_ssl, ps): Promise<addWebsiteType> => {
  const url = `${Login.URL}/site?action=AddSite`;

  const data = await getKeyData();

  data['webname'] = JSON.stringify({ 'domain': domain, 'domainlist': [], 'count': 0 });
  data['type'] = 'PHP';
  data['port'] = port;
  data['path'] = `/www/wwwroot/${domain}`;
  data['type_id'] = 0;
  data['version'] = version;
  data['sql'] = sql;
  data['ftp'] = ftp;
  if (ftp_username != null && ftp_password != null && ftp === true) {
    data['ftp_username'] = ftp_username;
    data['ftp_password'] = ftp_password;
  }
  data['sql'] = sql;
  if (datauser != null && datapassword != null && sql === true) {
    data['datauser'] = datauser;
    data['datapassword'] = datapassword;
  }
  data['codeing'] = 'utf8';
  data['set_ssl'] = set_ssl;
  data['force_ssl'] = force_ssl;
  data['ps'] = ps;

  const result = await httpRequest(url, data);

  return result;
};

const deleteWebsite = async (id, domain, ftp, database, path): Promise<deleteWebsiteType> => {
  const url = `${Login.URL}/site?action=DeleteSite`;

  const data = await getKeyData();
  data['id'] = id;
  data['webname'] = domain;
  data['ftp'] = ftp;
  data['database'] = database;
  data['path'] = path;

  const result = await httpRequest(url, data);

  return result;
};

const stopWebsite = async (id, domain): Promise<stopWebsiteType> => {
  const url = `${Login.URL}/site?action=SiteStop`;

  const data = await getKeyData();
  data['id'] = id;
  data['name'] = domain;

  const result = await httpRequest(url, data);

  return result;
};

const startWebsite = async (id, domain): Promise<startWebsiteType> => {
  const url = `${Login.URL}/site?action=SiteStart`;

  const data = await getKeyData();
  data['id'] = id;
  data['name'] = domain;

  const result = await httpRequest(url, data);

  return result;
};

const modifyWebsiteNotes = async (id, note): Promise<webSiteNotesTypes> => {
  const url = `${Login.URL}/data?action=setPs&table=sites`;

  const data = await getKeyData();
  data['id'] = id;
  data['ps'] = note;

  const result = await httpRequest(url, data);

  return result;
};

const getListWebsiteBackups = async (): Promise<listOfWebsitesType> => {
  const url = `${Login.URL}/data?action=getData&table=backup`;

  const data = await getKeyData();
  const result = await httpRequest(url, data);

  return result;
};

const deleteWebsiteBackup = async (id): Promise<deleteWebsiteBackupType> => {
  const url = `${Login.URL}/site?action=DelBackup`;

  const data = await getKeyData();
  data['id'] = id;

  const result = await httpRequest(url, data);

  return result;
};

// * Specs in page 09 https://www.aapanel.com/Document/api.pdf

// TODO: GET LIST DOMAIN NAMES FOR YOUR WEBSITE
// TODO: ADD DOMAIN NAMES FOR YOUR WEBSITE
// TODO: DELETE DOMAIN NAMES FOR YOUR WEBSITE

export {
  getListOfWebsites, getWebsiteClassification, getListPHP, addWebsite, deleteWebsite, stopWebsite, startWebsite, modifyWebsiteNotes, getListWebsiteBackups, deleteWebsiteBackup,
};
