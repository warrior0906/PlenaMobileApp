import React, {useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {detailsScreenStyles} from './details.styles';
import {Button} from '../../components/molecules';
import {addToCart} from '../../store/slices/cartSlice';
import {TouchableIcon} from '../../components/atoms';
import {updateFavoriteItems} from '../../store/slices/productSlice';

const DetailsScreen = () => {
  const styles = detailsScreenStyles();
  const dispatch = useDispatch();
  const product = useSelector(
    (state: RootState) => state.product.selectedProduct,
  );
  const [imgActive, setImageActive] = useState<number>(0);

  const onchange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imgActive) {
        setImageActive(slide);
      }
    }
  };

  const renderPrice = () => (
    <View style={styles.priceView}>
      <Text style={styles.price}>${product?.price}</Text>
      <View style={styles.discountView}>
        <Text style={styles.discount}>{product?.discountPercentage}% OFF</Text>
      </View>
    </View>
  );

  const renderButtons = () => (
    <View style={styles.buttonView}>
      <Button
        title={'Add to cart'}
        onPress={() => {
          product && dispatch(addToCart(product));
        }}
        variant={'Outlined'}
      />
      <Button title={'Buy now'} onPress={() => {}} variant={'Filled'} />
    </View>
  );

  const renderDetails = () => (
    <View style={styles.detailsView}>
      <Text style={styles.detailsTile}>Details</Text>
      <Text style={styles.detailsDesc}>{product?.description}</Text>
    </View>
  );

  const renderItem = ({item}: {item: string}) => (
    <View>
      <Image source={{uri: item}} style={styles.img} />
      <TouchableIcon
        name={product?.favorite ? 'favorite' : 'wishlist'}
        onPress={() => product && dispatch(updateFavoriteItems(product))}
        containerStyle={styles.favoriteIcon}
      />
      <View style={styles.carouselDotView}>
        {product?.images?.map((e, index) => (
          <View
            style={[
              styles.carouselDot,
              imgActive === index ? styles.selectedDot : null,
            ]}
            key={e}
          />
        ))}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.rating}>{product?.rating}/5 Rating</Text>
      <FlatList
        data={product?.images}
        renderItem={renderItem}
        horizontal
        keyExtractor={item => item}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={({nativeEvent}) => onchange(nativeEvent)}
      />
      {renderPrice()}
      {renderButtons()}
      {renderDetails()}
    </ScrollView>
  );
};

export default DetailsScreen;
