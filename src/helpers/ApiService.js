import axios from 'axios'

const _baseUrl = 'http://127.0.0.1:8000/api/';

const config = {
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
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
