import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getAllProducts} from '../../store/slices/productSlice';
import {RootState} from '../../store/store';
import {IProductItemInterface} from '../../utils/interfaces';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector(
    (state: RootState) => state.product.productList,
  );

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const renderItem = ({item}: {item: IProductItemInterface}) => {
    return <Text> {item?.title}</Text>;
  };

  return (
    <View>
      <FlatList data={productList?.products} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
