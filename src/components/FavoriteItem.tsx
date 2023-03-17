import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ItemData } from '../../typings';
import { removeFavorite } from '../redux/favoriteSlice';
import { CurrencyFormat } from '../utils/CurrenyFormat';
import FavoriteButton from './FavoriteButton';

type RootStackParamsList = {
  ProductInfo: { item?: ItemData };
};

type FavoriteItemNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'ProductInfo'
>;

type Props = {
  item: ItemData;
  index: number;
};

const FavoriteItem = ({ item, index }: Props) => {
  const navigation = useNavigation<FavoriteItemNavigationProp>();
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(removeFavorite({ id: item.id }));
  };

  const handleProductInfo = () => {
    navigation.navigate('ProductInfo', { item: item });
  };

  return (
    <View className="w-[50%] mb-5 relative">
      <View
        className={`bg-gray-200 h-36 rounded-b-[40px] mb-4 ${
          index % 2 == 0 ? 'rounded-tl-[40px]' : 'rounded-tr-[40px]'
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
            <FavoriteButton
              isHome={true}
              onPress={handleFavorite}
              isActive={true}
            />
          </ImageBackground>
        </Pressable>
      </View>
      <Text className="text-center font-serif uppercase text-darkColor mb-1">
        {item.title}
      </Text>
      <Text className="text-center font-serif">
        {CurrencyFormat(item.price)}
      </Text>
    </View>
  );
};

export default FavoriteItem;
