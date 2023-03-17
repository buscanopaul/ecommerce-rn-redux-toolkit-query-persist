import React from 'react';
import { Dimensions, FlatList } from 'react-native';
import { ProductData } from '../../typings';
import ProductItem from './ProductItem';

type Props = {
  productData: ProductData[];
};

const windowWidth = Dimensions.get('window').width;

const ProductList = ({ productData }: Props) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: ProductData;
    index: number;
  }) => <ProductItem item={item} index={index} />;

  return (
    <FlatList
      className="mx-2 mt-5"
      style={{ width: windowWidth - 15 }}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      data={productData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default ProductList;
