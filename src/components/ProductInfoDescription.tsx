import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ProductData } from '../../typings';
import { addFavorite, removeFavorite } from '../redux/favoriteSlice';
import { RootState } from '../redux/store';
import { CurrencyFormat } from '../utils/CurrenyFormat';
import FavoriteButton from './FavoriteButton';

type Props = {
  item: ProductData;
};

const ProductInfoDescription = ({ item }: Props) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.favorite);

  const isFavorite = favorites.some(
    (favoriteItem) => favoriteItem.id === item.id
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite({ id: item.id }));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <View className="relative ">
      <Text className="font-sans text-2xl mt-3 uppercase">{item.title}</Text>
      <View className="flex flex-row items-center justify-between mt-3">
        <Text className="font-sans text-xl">{CurrencyFormat(item.price)}</Text>
        <FavoriteButton onPress={handleFavorite} isActive={isFavorite} />
      </View>
    </View>
  );
};

export default ProductInfoDescription;
