import React, {useMemo} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {ICartItems} from '../../utils/interfaces';
import {cartScreenStyles} from './cart.styles';
import {addToCart, removeFromCart} from '../../store/slices/cartSlice';
import {Button, RowView} from '../../components/molecules';
import {cartDetails} from './cart.constants';
import {getCartItemCount} from '../../utils/common';

const CartScreen = () => {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.cart.itemList);
  const cartItemCount = useMemo(() => getCartItemCount(list), [list]);

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

  const renderFooter = () => (
    <View style={styles.footer}>
      {cartDetails(list)?.map(e => (
        <RowView title={e?.title} value={e?.value} key={e?.title} />
      ))}
      <Button
        title={'Proceed to checkout'}
        onPress={() => {}}
        variant="Filled"
        containerStyle={styles.btnStyle}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={renderItem} />
      {cartItemCount > 0 ? renderFooter() : null}
    </View>
  );
};

export default CartScreen;
