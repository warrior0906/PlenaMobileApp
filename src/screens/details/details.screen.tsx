import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {RootState} from '../../store/store';
import {detailsScreenStyles} from './details.styles';
import {Button} from '../../components/molecules';

const DetailsScreen = () => {
  const product = useSelector(
    (state: RootState) => state.product.selectedProduct,
  );
  const navigation: any = useNavigation();

  // need to implement slider for images
  const renderImages = ({item}: {item: string}) => (
    <Image source={{uri: item}} style={styles.img} />
  );

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
      <Button title={'Add to cart'} onPress={() => {}} variant={'Outlined'} />
      <Button title={'Buy now'} onPress={() => {}} variant={'Filled'} />
    </View>
  );

  const renderDetails = () => (
    <View style={styles.detailsView}>
      <Text style={styles.detailsTile}>Details</Text>
      <Text style={styles.detailsDesc}>{product?.description}</Text>
    </View>
  );

  const styles = detailsScreenStyles();
  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>{product?.title}</Text>
      <Text style={styles.rating}>{product?.rating}/5 Rating</Text>
      <FlatList
        data={product?.images}
        renderItem={renderImages}
        horizontal
        keyExtractor={item => item}
      />
      {renderPrice()}
      {renderButtons()}
      {renderDetails()}
    </ScrollView>
  );
};

export default DetailsScreen;
