import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const dimensions = {
  width,
  height,
};

const vertical = (val) => Math.floor((val / 812) * dimensions.height);
const horizontal = (val) => Math.floor((val / 375) * dimensions.width);

export const responsive = {
  vertical,
  horizontal,
};
