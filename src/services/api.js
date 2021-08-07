import axios from 'axios';
import {API_KEY} from '@env';

const HOST = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1`;

let cacheCalls = {};

export const getImages = (searchTerm, page) => {
  return new Promise((resolve, reject) => {
    if (cacheCalls[`${searchTerm}${page}`]) {
      resolve(cacheCalls[`${searchTerm}${page}`]);
    } else {
      //allways search 30
      axios
        .get(`${HOST}&per_page=30&text=${searchTerm}&page=${page}`)
        .then(({data}) => {
          cacheCalls[`${searchTerm}${page}`] = data.photos.photo;
          resolve(data.photos.photo);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    }
  });
};
