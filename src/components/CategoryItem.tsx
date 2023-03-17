import React from 'react';
import { Pressable, Text } from 'react-native';

type ItemProps = { title: string };

const CategoryItem = ({ title }: ItemProps) => {
  return (
    <Pressable>
      <Text className="font-serif text-2xl mr-3 capitalize">{title}</Text>
    </Pressable>
  );
};

export default CategoryItem;
