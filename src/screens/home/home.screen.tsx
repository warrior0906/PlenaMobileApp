import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts} from '../../store/slices/productSlice';
import {RootState} from '../../store/store';
import {IProductItemInterface} from '../../utils/interfaces';
import {homePageStyles} from './home.styles';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.product.productList,
  );

  const styles = homePageStyles();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const onPressCart = () => {};

  const renderItem = ({item}: {item: IProductItemInterface}) => {
    return (
      <View style={styles.item}>
        <Image source={{uri: item.thumbnail}} style={styles.img} />
        <View style={styles.detailsView}>
          <Text style={styles.price}> ${item?.price}</Text>
          <TouchableOpacity onPress={onPressCart}>
            {/* TODO: update icon */}
            <Text>{'cart'}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.name}> {item?.title}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={productList?.products}
      renderItem={renderItem}
      numColumns={2}
      style={styles.container}
      keyExtractor={item => item.title}
    />
  );
};

export default HomeScreen;
