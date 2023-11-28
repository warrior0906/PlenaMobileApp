import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const touchableIconStyles = () =>
  StyleSheet.create({
    icon: {
      height: scaling.hs(22),
      width: scaling.vs(22),
    },
    numberView: {
      position: 'absolute',
      backgroundColor: '#BE8400',
      paddingHorizontal: scaling.hs(6),
      paddingVertical: scaling.vs(2),
      borderRadius: scaling.hs(12),
      left: scaling.hs(12),
      bottom: scaling.vs(8),
    },
    number: {
      color: '#FFF',
    },
  });
