import axios from './axios';
import * as masks from './masks';

const error = (e) => {
  if (process.env.NODE_ENV === 'development') console.error(e.message || e.response.data.message);
  return e.message || e.response.data.message;
}

const contact = async ({ name, email, message }) => {
  try {
    const { data } = await axios.post(`/contact`, { name, email, message });
    return data;
  } catch (e) {
    return error(e)
  }
};

const getOrganization = async (organizationID) => {
  try {
    const res = await axios.get(`/organization/${organizationID}`);
    return res?.data;
  } catch (e) {
    return error(e)
  }
};

const saveOrganization = async ({ document, name, phone, email, address, city, state }) => {
  try {
    const { data } = await axios.post(`/organization`, {
      document: masks.cnpj(document),
      name,
      phone: masks.phone(phone),
      email,
      address,
      city,
      state,
    });
    return data;
  } catch (e) {
    return error(e)
  }
};

const saveOrganizationLogin = async ({ id, code, login, password }) => {
  try {
    const { data } = await axios.post(`/organization/login`, {
      organizationID: id,
      code: masks.code(code),
      login,
      password,
    });
    return data;
  } catch (e) {
    return error(e)
  }
};

const confirmOrganization = async ({ id, code }) => {
  try {
    const { data } = await axios.post(`/organization/confirm`, {
      organizationID: id,
      code: masks.confirmationCode(code),
    });
    return data;
  } catch (e) {
    return error(e)
  }
};

export { contact, getOrganization, saveOrganization, saveOrganizationLogin, confirmOrganization };
