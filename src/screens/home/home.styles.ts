import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const homePageStyles = () =>
  StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    container: {
      marginHorizontal: scaling.hs(8),
      paddingBottom: scaling.vs(50),
    },
    item: {
      borderWidth: 0.2,
      width: '46%',
      marginHorizontal: '2%',
      marginVertical: scaling.vs(8),
      borderRadius: scaling.hs(12),
      paddingHorizontal: scaling.hs(12),
      paddingVertical: scaling.vs(12),
    },
    img: {
      height: scaling.vs(100),
      width: scaling.hs(100),
      alignSelf: 'center',
      borderRadius: scaling.hs(50),
      marginBottom: scaling.hs(8),
      marginVertical: scaling.vs(8),
    },
    detailsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      fontSize: scaling.hs(14),
      fontWeight: 'bold',
      marginBottom: scaling.vs(4),
    },
    name: {
      fontSize: scaling.hs(12),
      fontWeight: '300',
      marginBottom: scaling.vs(4),
      maxWidth: '85%',
    },
  });
