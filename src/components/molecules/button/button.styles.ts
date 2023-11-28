import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const buttonStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#1434A4',
      borderRadius: scaling.hs(16),
      paddingHorizontal: scaling.hs(20),
      paddingVertical: scaling.vs(16),
      marginHorizontal: scaling.hs(8),
      marginVertical: scaling.vs(24),
    },
    filledContainer: {
      backgroundColor: '#1434A4',
    },
    title: {
      color: '#1434A4',
    },
    filledTitle: {
      color: '#FFFF',
    },
  });
