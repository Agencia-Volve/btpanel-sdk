declare const getMailList: () => Promise<any>;
declare const getSpecificMailList: (domain: any) => Promise<any>;
declare const editSpecificMail: (email: any, password: any, full_name: any, active: any, is_admin: any, quota: any) => Promise<any>;
export { getMailList, getSpecificMailList, editSpecificMail };
