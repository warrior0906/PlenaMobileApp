import {StyleSheet} from 'react-native';
import scaling from '../../../utils/scaling';

export const headerStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: scaling.vs(100),
      padding: scaling.hs(16),
      marginHorizontal: scaling.hs(8),
      marginBottom: scaling.vs(24),
      borderRadius: scaling.hs(12),
      backgroundColor: '#1434A4',
    },
    title: {
      fontSize: scaling.hs(22),
      color: '#FFFF',
      fontWeight: '300',
    },
  });
