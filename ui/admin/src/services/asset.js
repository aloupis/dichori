import axios from 'axios';

const url =
  process.env.REACT_APP_MEDIA || 'https://dichori-media.herokuapp.com'; // 'https://dichori-nginx.herokuapp.com/media';

export const listAssets = (path) => {
  const formData = new FormData();
  formData.append('folder', path);
  console.log({ formData });
  return axios({
    url: `${url}/files`,
    method: 'post',
    data: formData,
  });
};

export const uploadAssets = (files, path) => {
  const formData = new FormData();
  files.forEach((x) => formData.append('files', x, x.name));
  formData.append('path', path);

  return axios({
    url: `${url}/upload`,
    method: 'put',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const deleteAsset = (publicId) => {
  if (publicId) {
    const formData = new FormData();
    formData.append('key', publicId);

    return axios({
      url: `${url}/delete`,
      method: 'post',
      data: formData,
    });
  }
};

export const getAsset = (publicId) => {
  const formData = new FormData();
  formData.append('publicId', publicId);
  return axios({
    url: `${url}/asset`,
    method: 'post',
    data: formData,
  });
};
