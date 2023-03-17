import React from 'react';
import { FlatList } from 'react-native';
import { Data } from '../../typings';
import CategoryItem from './CategoryItem';

type Props = {
  categoryData: Data[];
};

const CategoryList = ({ categoryData }: Props) => {
  return (
    <FlatList
      className="grow-0 pl-4"
      showsHorizontalScrollIndicator={false}
      data={categoryData}
      renderItem={({ item }) => <CategoryItem title={item.title} />}
      keyExtractor={(item) => item.id}
      horizontal={true}
    />
  );
};

export default CategoryList;
