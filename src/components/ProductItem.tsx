import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProductData } from '../../typings';
import { addFavorite } from '../redux/favoriteSlice';
import { CurrencyFormat } from '../utils/CurrenyFormat';
import FavoriteButton from './FavoriteButton';

type RootStackParamsList = {
  ProductInfo: { item: ProductData };
};

type ProductInfoScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'ProductInfo'
>;

type Props = {
  item: ProductData;
  index: number;
};

const ProductItem = ({ item, index }: Props) => {
  const navigation = useNavigation<ProductInfoScreenNavigationProp>();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(item));
  };

  const handleProductInfo = () => {
    navigation.navigate('ProductInfo', { item });
  };

  return (
    <View className="w-[50%] mb-5 relative">
      <View
        className={`bg-lightGray h-36 rounded-b-[40px] mb-4 ${
          index % 2 == 0 ? 'rounded-tl-[40px]' : 'rounded-tr-[40px] mr-20'
        } mx-2`}
      >
        <Pressable onPress={handleProductInfo}>
          <ImageBackground
            source={{
              uri: item.imageUrl,
            }}
            imageStyle={{
              height: 144,
              resizeMode: 'cover',
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
              borderTopLeftRadius: index % 2 === 0 ? 40 : 0,
              borderTopRightRadius: index % 2 !== 0 ? 40 : 0,
              position: 'relative',
            }}
          >
            <FavoriteButton isHome={true} onPress={handleFavorite} />
          </ImageBackground>
        </Pressable>
      </View>
      <Text className="text-center font-serif uppercase text-gray-300 mb-1 text-darkColor">
        {item.title}
      </Text>
      <Text className="text-center font-serif">
        {CurrencyFormat(item.price)}
      </Text>
    </View>
  );
};

export default ProductItem;
