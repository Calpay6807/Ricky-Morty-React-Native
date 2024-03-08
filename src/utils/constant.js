import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const resizeMode = {
  COVER: 'cover',
  CONTAIN: 'contain',
  CENTER: 'center',
};

export const status = [
  {
    id: 1,
    name: 'Alive',
    value: 'alive',
  },
  {
    id: 2,
    name: 'Dead',
    value: 'dead',
  },
  {
    id: 3,
    name: 'Unknown',
    value: 'unknown',
  },
];
