import React from 'react';
import { Text, View } from 'react-native';
import { CurrencyFormat } from '../utils/CurrenyFormat';
import { WordUppercase } from '../utils/WordUppercase';

type Props = {
  title: string;
  size: string;
  color: string;
  price: number;
};

const CartItemDescription = ({ title, size, price }: Props) => {
  return (
    <View className="relative pl-7 w-37">
      <Text className="font-serif mb-1 text-gray-400 uppercase">{title}</Text>
      <View className="flex-row mb-2 items-center">
        <Text className="font-serif text-gray-100 text-xs mr-2">size</Text>
        <Text className="text-black font-serif text-xs">
          {WordUppercase(size)}
        </Text>
      </View>
      <Text className="font-sans">{CurrencyFormat(price)}</Text>
    </View>
  );
};

export default CartItemDescription;
