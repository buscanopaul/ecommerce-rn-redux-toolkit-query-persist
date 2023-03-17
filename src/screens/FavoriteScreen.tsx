import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ItemData } from '../../typings';
import FavoriteFirstItem from '../components/FavoriteFirstItem';
import FavoriteItem from '../components/FavoriteItem';
import { RootState } from '../redux/store';

const FavoriteScreen = () => {
  const favorites = useSelector((state: RootState) => state.favorite.favorite);
  const renderItem = ({ item, index }: { item: ItemData; index: number }) => {
    return <FavoriteItem item={item} index={index} />;
  };

  return (
    <ScrollView
      className="relative bg-light flex-1 px-4 pt-5"
      showsVerticalScrollIndicator={false}
    >
      <FavoriteFirstItem />
      <FlatList
        className="pt-5"
        scrollEnabled={false}
        numColumns={2}
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View className="mb-10" />
    </ScrollView>
  );
};

export default FavoriteScreen;
