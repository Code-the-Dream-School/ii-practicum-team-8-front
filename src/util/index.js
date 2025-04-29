import axios from "axios";

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

const getAllData = async (url) => {
  try {
    let res = await axios.get(url);
    let data = await res.data;
    return data;
  } catch (error) {
    console.log(error, `error - getAllData in ${url} route`);
  }
};
//   Call to server to post the data
const postData = async (url, requestBody) => {
  try {
    let res = await axios.post(url, requestBody);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error, `error - postData in ${url} route`);
  }
};

export { getData, getAllData, postData };
