import axios from 'axios';
import { serverUrl } from '../serverData/apiPaths';
import reqHeaders from '../serverData/reqHeaders';

const server = serverUrl;

const sendUserInfo = async (pathApi, method, values) => {
  const path = new URL(pathApi, server);
  const normValues = JSON.stringify({ user: values });
  try {
    const response = await axios({
      method,
      url: path.toString(),
      data: normValues,
      headers: reqHeaders(),
    });
    return response.data;
  } catch ({ response }) {
    throw response;
  }
};

export default sendUserInfo;
