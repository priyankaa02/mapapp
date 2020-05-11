import MapContainer from '../containers/MapContainer';
import ListContainer from '../containers/ListContainer';
import SplashContainer from '../containers/SplashContainer';
import {ScreenNames} from './ScreenNames';

export const ScreenPaths = {
  [ScreenNames.SplashContainer]: SplashContainer,
  [ScreenNames.MapContainer]: MapContainer,
  [ScreenNames.ListContainer]: ListContainer,
};
