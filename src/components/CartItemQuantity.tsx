import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
} from '../redux/cartSlice';

type Props = {
  quantity: number;
  itemId: number;
};

const CartItemQuantity = ({ quantity, itemId }: Props) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deleteItem({ id: itemId }));
  };

  const handleMinus = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity({ productId: itemId }));
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ productId: itemId }));
  };

  return (
    <View className="relative flex justify-between items-end h-16">
      <Pressable onPress={handleRemove}>
        <AntDesign name="close" size={18} color="black" />
      </Pressable>
      <View className="flex flex-row items-center">
        <Pressable onPress={handleMinus}>
          <AntDesign name="minussquareo" size={24} color="black" />
        </Pressable>
        <Text className="font-serif px-1">
          {quantity.toString().length < 2 ? `0${quantity}` : quantity}
        </Text>
        <Pressable onPress={handleIncrement}>
          <AntDesign name="plussquare" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItemQuantity;
