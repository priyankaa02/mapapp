import React, {useEffect} from 'react';
import Splash from '../../components/Splash';
import SplashScreen from 'react-native-splash-screen';
import {useSelector, useDispatch} from 'react-redux';
import {navigate, navigateAndReset} from '../../navigators/NavigationService';
import ScreenNames from '../../navigators/ScreenNames';

const SplashContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    navigateAndReset(ScreenNames.MapContainer);
    setTimeout(() => SplashScreen.hide(), 2000);
  });
  return <Splash />;
};

export default SplashContainer;
