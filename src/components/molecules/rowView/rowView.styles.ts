import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const rowViewStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: scaling.hs(16),
      marginVertical: scaling.vs(6),
    },
    title: {
      opacity: 0.6,
      fontWeight: '300',
      fontSize: scaling.hs(14),
    },
    value: {
      fontWeight: '600',
      fontSize: scaling.hs(14),
    },
  });
