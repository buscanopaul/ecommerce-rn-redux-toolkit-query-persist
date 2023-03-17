import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

type Props = {
  onPress: () => void;
  isHome?: boolean;
  isActive?: boolean;
};

const FavoriteButton = ({ onPress, isHome, isActive }: Props) => {
  return (
    <Pressable
      className={`bg-primary rounded-full p-2 ${
        isHome && 'absolute right-3 bottom-4'
      }`}
      onPress={onPress}
    >
      <AntDesign
        name={`${isActive ? 'heart' : 'hearto'}`}
        size={24}
        color="black"
      />
    </Pressable>
  );
};

export default FavoriteButton;
