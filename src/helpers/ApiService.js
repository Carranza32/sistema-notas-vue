import axios from 'axios'

const _baseUrl = 'https://notas-unicaes-api.herokuapp.com/api/';
// const _baseUrl = 'http://localhost:8000/api/';

const config = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
};

export async function getWithToken(url) {
  const response = await axios.get(`${_baseUrl}${url}`, config);

  return response.data;
}

export async function postWithToken(url, body) {
  const response = await axios.post(`${_baseUrl}${url}`, body, config);

  return response.data;
}

export async function putWithToken(url, body) {
  const response = await axios.put(`${_baseUrl}${url}`, body, config);

  return response.data;
}

export async function deleteWithToken(url) {
  const response = await axios.delete(`${_baseUrl}${url}`, config);

  return response.data;
}

export async function get(url) {
  const response = await axios.get(`${_baseUrl}${url}`, config);

  return response.data;
}

export async function post(url, body) {
  const response = await axios.post(`${_baseUrl}${url}`, body, config);

  return response.data;
}
