import React from 'react';
import { Pressable, Text } from 'react-native';

type Props = {
  onPress: () => void;
  children: string;
};

const Button = ({ onPress, children }: Props) => {
  return (
    <Pressable
      className="relative w-full bg-primary items-center p-7"
      onPress={onPress}
    >
      <Text className="font-sans text-2xl uppercase">{children}</Text>
    </Pressable>
  );
};

export default Button;
