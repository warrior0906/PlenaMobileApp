import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  getAllProducts,
  setSelectedProduct,
  updateFavoriteItems,
} from '../../store/slices/productSlice';
import {addToCart} from '../../store/slices/cartSlice';
import {RootState} from '../../store/store';
import {IProductItemInterface} from '../../utils/interfaces';
import {TouchableIcon} from '../../components/atoms';
import {Header} from '../../components/organisms';
import {homePageStyles} from './home.styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.product.productList,
  );
  const navigation: any = useNavigation();

  const styles = homePageStyles();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const onPressItem = (item: IProductItemInterface) => {
    dispatch(setSelectedProduct(item));
    navigation.navigate('Details');
  };

  const onPressCart = (item: IProductItemInterface) => {
    dispatch(addToCart(item));
  };

  const onPressWishListIcon = (item: IProductItemInterface) => {
    dispatch(updateFavoriteItems(item));
  };

  const renderItem = ({item}: {item: IProductItemInterface}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <TouchableIcon
          name={item?.favorite ? 'favorite' : 'wishlist'}
          onPress={() => onPressWishListIcon(item)}
        />
        <Image source={{uri: item.thumbnail}} style={styles.img} />
        <View style={styles.detailsView}>
          <Text style={styles.price}>${item?.price}</Text>
          <TouchableIcon name="add" onPress={() => onPressCart(item)} />
        </View>
        <Text style={styles.name}>{item?.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.rootContainer}>
      <Header />
      <FlatList
        data={productList?.products}
        renderItem={renderItem}
        numColumns={2}
        style={styles.container}
        keyExtractor={item => item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
