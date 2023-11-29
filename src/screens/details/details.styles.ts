import {Dimensions, StyleSheet} from 'react-native';
import scaling from '../../utils/scaling';

export const detailsScreenStyles = () =>
  StyleSheet.create({
    rootContainer: {
      backgroundColor: '#FFFF',
      paddingVertical: scaling.hs(16),
    },
    title: {
      textAlign: 'center',
      fontSize: scaling.hs(48),
      fontWeight: '200',
    },
    rating: {
      paddingHorizontal: scaling.hs(16),
      paddingVertical: scaling.vs(12),
      opacity: 0.6,
    },
    img: {
      height: scaling.vs(200),
      width: Dimensions.get('window').width,
      marginVertical: scaling.vs(8),
    },
    carouselDotView: {
      flexDirection: 'row',
      position: 'absolute',
      bottom: scaling.vs(16),
      marginLeft: scaling.hs(12),
    },
    carouselDot: {
      width: scaling.hs(24),
      height: scaling.vs(3),
      borderRadius: scaling.hs(3),
      backgroundColor: 'lightgrey',
      marginHorizontal: scaling.hs(3),
    },
    selectedDot: {
      backgroundColor: '#BE8400',
    },
    priceView: {
      paddingHorizontal: scaling.hs(16),
      paddingTop: scaling.vs(12),
      flexDirection: 'row',
      alignItems: 'center',
    },
    price: {
      fontSize: scaling.hs(14),
      fontWeight: 'bold',
      color: '#1434A4',
      marginBottom: scaling.vs(4),
      marginRight: scaling.hs(12),
    },
    discountView: {
      paddingHorizontal: scaling.hs(12),
      paddingVertical: scaling.hs(8),
      backgroundColor: '#1434A4',
      borderRadius: scaling.hs(16),
    },
    discount: {
      color: '#FFF',
      fontSize: scaling.hs(10),
    },
    buttonView: {
      flexDirection: 'row',
    },
    detailsView: {
      paddingHorizontal: scaling.hs(16),
    },
    detailsTile: {
      fontSize: scaling.hs(16),
      fontWeight: '300',
    },
    detailsDesc: {
      paddingVertical: scaling.vs(12),
      fontSize: scaling.hs(14),
      fontWeight: '300',
      opacity: 0.6,
    },
  });
