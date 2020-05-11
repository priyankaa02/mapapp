/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenNames from './ScreenNames';
import {ScreenPaths} from './ScreenPaths';
import {useDispatch, useSelector} from 'react-redux';
import {setTopLevelNavigator} from './NavigationService';
import {actions as navActions} from '../reducers/nav';

const AppNavigator = createStackNavigator(
  {
    ...ScreenPaths,
  },
  {
    mode: 'modal',
    initialRouteName: ScreenNames.SplashContainer,
    headerMode: 'none',
    transparentCard: true,
    cardStyle: {
      backgroundColor: 'transparent',
      opacity: 1,
    },
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null,
      title: '',
    },
  },
);

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

const AppContainer = createAppContainer(AppNavigator);

const EnhancedAppContainer = ({navRef, onNavigationStateChange}) => {
  const dispatch = useDispatch();
  const trackCurrentState = (prevState, currentState, action) => {
    dispatch(navActions.setCurrentScreen(getActiveRouteName(currentState)));
  };

  return (
    <AppContainer
      ref={(navigatorRef) => {
        setTopLevelNavigator(navigatorRef);
      }}
      onNavigationStateChange={trackCurrentState}
    />
  );
};

export default EnhancedAppContainer;
