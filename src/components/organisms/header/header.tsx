import React from 'react';
import {Text, View} from 'react-native';
import {headerStyles} from './header.styles';
import {TouchableIcon} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const styles = headerStyles();
  const navigation: any = useNavigation();
  const onPressCart = () => {
    navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, User</Text>
      <TouchableIcon name="cart" onPress={onPressCart} />
    </View>
  );
};

export default Header;
