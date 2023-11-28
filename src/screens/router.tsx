import React, {useMemo} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import HomeScreen from './home/home.screen';
import CartScreen from './cart/cart.screen';
import DetailsScreen from './details/details.screen';
import {TouchableIcon} from '../components/atoms';
import scaling from '../utils/scaling';
import {getCartItemCount} from '../utils/common';

const Stack = createStackNavigator();

const Router = () => {
  const list = useSelector((state: RootState) => state.cart.itemList);

  const cartItemCount = useMemo(() => getCartItemCount(list), [list]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: `Shopping Cart (${cartItemCount})`,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({navigation}) => ({
            title: '',
            headerRight: () => (
              <View style={{marginRight: scaling.hs(12)}}>
                <TouchableIcon
                  name="cartIcon"
                  onPress={() => navigation.navigate('Cart')}
                  number={cartItemCount}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
