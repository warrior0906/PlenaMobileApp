import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  getAllProducts,
  setSelectedProduct,
} from '../../store/slices/productSlice';
import {addToCart} from '../../store/slices/cartSlice';
import {RootState} from '../../store/store';
import {IProductItemInterface} from '../../utils/interfaces';
import {homePageStyles} from './home.styles';
import {TouchableIcon} from '../../components/atoms';
import {Header} from '../../components/organisms';

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

  const onPressWishListIcon = () => {};

  const renderItem = ({item}: {item: IProductItemInterface}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <TouchableIcon name="wishlist" onPress={onPressWishListIcon} />
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
    <View>
      <Header />
      <FlatList
        data={productList?.products}
        renderItem={renderItem}
        numColumns={2}
        style={styles.container}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

export default HomeScreen;
