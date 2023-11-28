import React, {useMemo} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {TouchableIcon} from '../../atoms';
import {getCartItemCount} from '../../../utils/common';
import {headerStyles} from './header.styles';

const Header = () => {
  const list = useSelector((state: RootState) => state.cart.itemList);

  const styles = headerStyles();
  const navigation: any = useNavigation();

  const cartItemCount = useMemo(() => getCartItemCount(list), [list]);

  const onPressCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, User</Text>
      <TouchableIcon name="cart" onPress={onPressCart} number={cartItemCount} />
    </View>
  );
};

export default Header;
