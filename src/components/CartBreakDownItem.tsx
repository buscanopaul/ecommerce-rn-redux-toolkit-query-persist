import React from 'react';
import { Text, View } from 'react-native';
import { CurrencyFormat } from '../utils/CurrenyFormat';

type Props = {
  title: string;
  price: number;
  isTotal?: boolean;
};

const CartBreakDownItem = ({ title, price, isTotal }: Props) => {
  return (
    <View className="relative flex flex-row items-center justify-between mb-3">
      <Text
        className={`font-serif ${isTotal ? `text-primary` : 'text-darkColor'}`}
      >
        {title}
      </Text>
      <View className="flex flex-row items-center justify-center">
        <Text
          className={`font-serif mr-1 ${
            isTotal ? `text-primary` : 'text-darkColor'
          }`}
        >
          {CurrencyFormat(price)}
        </Text>
      </View>
    </View>
  );
};

export default CartBreakDownItem;
