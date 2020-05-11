import axios from 'axios';
import {URL} from '../constants';

export const fetchApiMaker = () => ({url}) => {
  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      console.log('api res', res.results);
      return res.results;
    });
};

export function* fetchApi({url, data, method = 'POST'}) {
  const res = yield fetchApiMaker()({url, data, method});
  return res;
}
