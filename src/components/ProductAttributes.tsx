import React from 'react';
import { View } from 'react-native';
import { ProductData } from '../../typings';
import ProductInfoColor from './ProductInfoColor';
import ProductInfoSize from './ProductInfoSize';

type Props = {
  item: ProductData;
};

const ProductAttributes = ({ item }: Props) => {
  return (
    <View className="flex flex-row items-center justify-between mt-7 mb-64">
      <ProductInfoColor colors={item.colors} />
      <ProductInfoSize sizes={item.sizes} />
    </View>
  );
};

export default ProductAttributes;
