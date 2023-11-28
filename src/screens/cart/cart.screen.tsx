import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ICartItems} from '../../utils/interfaces';
import {cartScreenStyles} from './cart.styles';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.cart.itemList);

  const styles = cartScreenStyles();

  const renderQuantityView = (item: ICartItems) => (
    <View style={styles.quantityContainer}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => dispatch(removeFromCart(item.items))}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{item?.quantity}</Text>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => dispatch(addToCart(item.items))}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({item}: {item: ICartItems}) => {
    const {items} = item;
    return (
      <View style={styles.itemContainer} key={items.title}>
        <Image source={{uri: items.thumbnail}} style={styles.img} />
        <View style={styles.textContainer}>
          <Text>{items?.title}</Text>
          <Text>${items?.price}</Text>
        </View>
        {renderQuantityView(item)}
      </View>
    );
  };
  return (
    <FlatList data={list} renderItem={renderItem} style={styles.container} />
  );
};

export default CartScreen;
