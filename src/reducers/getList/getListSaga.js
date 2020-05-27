import {takeLatest, call, put, delay, race} from 'redux-saga/effects';
import {
  types as getListTypes,
  actions as getListActions,
  getPlaceUrl,
} from './index';
import {fetchApi} from '../../api';
import {URL} from '../../constants';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

function* getPropertyList(action) {
  const {data} = action.payload;
  console.log('data.length', data);
  let res = []
  // navigateAndReset(ScreenNames.ListContainer);
  yield put(getListActions.setLoading(true));
  for(let i = 0; i < data.length; i++) {
    const responseJson = yield call(fetchApi, {
      url: getPlaceUrl(
        data[i].latitude,
        data[i].longitude,
        1500,
        'properties',
        'AIzaSyADaN7V9PqwBTD6FwP2zu6YqodJpbkq7bU',
      ),
    });
    if(responseJson.length > 0) {
      for (let i = 0; i < responseJson.length; i++) {
        res.push(responseJson[i]);
      }
    }
  }
  console.log('responseJson', res);
  // const {data} = responseJson;
  yield put(getListActions.setLoading(false));
  yield put(getListActions.propertyListResponse(res));
}

export default [takeLatest(getListTypes.GET_PROPERTY_LIST, getPropertyList)];
