import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const headerStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: scaling.vs(160),
      padding: scaling.hs(16),
      marginBottom: scaling.vs(24),
      backgroundColor: '#1434A4',
    },
    title: {
      fontSize: scaling.hs(22),
      color: '#FFFF',
      fontWeight: '300',
    },
  });
