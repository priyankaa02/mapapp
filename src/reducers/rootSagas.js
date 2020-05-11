import {all} from 'redux-saga/effects';
import getListSaga from './getList/getListSaga';

export default function* sagas() {
  yield all([...getListSaga]);
}
