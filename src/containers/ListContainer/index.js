import React from 'react';
import List from '../../components/List';
import {useSelector, useDispatch} from 'react-redux';
import {
  selectors as getListSelectors,
  actions as getListActions,
} from '../../reducers/getList';
import { navigateAndReset } from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

const ListContainer = () => {
  const dispatch = useDispatch();
  const onClickBack = () => {
    navigateAndReset(ScreenNames.MapContainer);
  };
  const propertyList = useSelector(getListSelectors.selectPropertyList);
  return <List getList={propertyList} onClickBack={onClickBack} />;
};

export default ListContainer;
