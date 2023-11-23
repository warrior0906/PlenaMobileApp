import {StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const homePageStyles = () =>
  StyleSheet.create({
    container: {
      marginHorizontal: scaling.hs(8),
    },
    item: {
      borderWidth: 0.2,
      height: scaling.vs(200),
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
      marginTop: scaling.vs(20),
      marginBottom: scaling.hs(8),
      marginVertical: scaling.vs(8),
    },
    detailsView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      fontWeight: 'bold',
      marginBottom: scaling.vs(4),
      maxWidth: '80%',
    },
    name: {
      fontWeight: '300',
      marginBottom: scaling.vs(4),
    },
  });
