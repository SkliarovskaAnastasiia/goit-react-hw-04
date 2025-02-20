import axios from 'axios';

const ACCESS_KEY = 'EUDSMgx5cTSPVmShqIH0MBrhPUPZudZy9djHifgEtAk';
axios.defaults.baseURL = 'https://api.unsplash.com';

export const getImagesByQuery = async (query, page) => {
  const responce = await axios.get('/search/photos1', {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 12,
    },
  });
  console.log(responce);
  return responce.data;
};
