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
  const {lat, lng} = action.payload;
  const responseJson = yield call(fetchApi, {
    url: getPlaceUrl(
      lat,
      lng,
      1500,
      'restaurant',
      'AIzaSyADaN7V9PqwBTD6FwP2zu6YqodJpbkq7bU',
    ),
  });
  console.log('responseJson', responseJson);
  // const {data} = responseJson;
  yield put(getListActions.propertyListResponse(responseJson));
  navigateAndReset(ScreenNames.ListContainer);
}

export default [takeLatest(getListTypes.GET_PROPERTY_LIST, getPropertyList)];
