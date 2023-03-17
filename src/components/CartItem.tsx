import React from 'react';
import { Image, View } from 'react-native';
import { ProductData } from '../../typings';
import CartItemDescription from './CartItemDescription';
import CartItemQuantity from './CartItemQuantity';

type Props = {};

const CartItem = ({ item }: { item: ProductData }) => {
  return (
    <View className="relative flex flex-row mb-7 items-center justify-between">
      <View className="flex flex-row items-center">
        <Image
          source={{
            uri: item.imageUrl,
          }}
          className="h-24 w-24 rounded-[20px]"
          style={{ resizeMode: 'cover' }}
        />
        <CartItemDescription
          title={item.title}
          size={item.sizes[0].value}
          color={item.colors[0].value}
          price={item.price}
        />
      </View>
      <CartItemQuantity quantity={item.quantity ?? 1} itemId={item.id} />
    </View>
  );
};

export default CartItem;
