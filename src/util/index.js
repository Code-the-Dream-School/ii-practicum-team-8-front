import axios from 'axios';

const getData = async (url, params, headers = null) => {
  try {
    const config = { params };

    if (headers) {
      config.headers = headers;
    }

    let res = await axios.get(url, config);
    let data = await res.data;
    return data;
  } catch (error) {
    console.log(error, `error - getData in ${url} route`);
  }
};

const getAllData = async (url, params = {}, headers = {}) => {
  const config = {
    params,
    headers,
  };
  let res = await axios.get(url, config);
  let data = await res.data;
  return data;
};

const postData = async (url, requestBody = {}, params = {}, headers = {}) => {
  const config = {
    params,
    headers,
  };
  const res = await axios.post(url, requestBody, config);
  const data = res.data;
  return data;
};

const deleteData = async (url, params = {}, headers = {}) => {
  const config = {
    params,
    headers,
  };
  const res = await axios.delete(url, config);
  const data = res.data;
  return data;
};

const updateData = async (url, requestBody={}, params = {}, headers = {}) => {
  const config = {
    params,
    headers,
  };
  const res = await axios.patch(url, requestBody, config);
  const data = res.data;
  return data;
};

export { getData, getAllData, postData, deleteData, updateData };