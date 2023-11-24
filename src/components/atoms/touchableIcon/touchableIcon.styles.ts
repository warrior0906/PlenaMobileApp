import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const touchableIconStyles = () =>
  StyleSheet.create({
    icon: {
      height: scaling.hs(22),
      width: scaling.vs(22),
    },
  });
