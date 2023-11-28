import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const cartScreenStyles = () =>
  StyleSheet.create({
    container: {
      paddingTop: scaling.vs(32),
      backgroundColor: '#FFFF',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: scaling.hs(16),
      marginBottom: scaling.vs(12),
      paddingVertical: scaling.vs(12),
      borderBottomWidth: 0.2,
      borderColor: 'grey',
    },
    img: {
      height: scaling.vs(32),
      width: scaling.hs(32),
      borderRadius: scaling.hs(32),
      marginRight: scaling.hs(12),
    },
    textContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    quantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      marginHorizontal: scaling.hs(8),
      paddingHorizontal: scaling.hs(12),
      paddingVertical: scaling.vs(6),
      backgroundColor: 'lightgrey',
      borderRadius: scaling.hs(20),
    },
  });
