import axios from 'axios';

const getReposByUpdate_at = async () => {
  try {
    const response = await axios.get('https://api.github.com/users/brunoro7/repos?sort=update_at');

    // repos? sort = update_at & direction=desc ou asc optional;
    // tem que retirar os espaços e pode alterar as "chaves";

    return response;
  } catch (err) {
    return err;
  }
};

export default getReposByUpdate_at;
