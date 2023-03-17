import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

type Props = {
  onPress: () => void;
};

const BackButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress} className="rounded-md p-1 bg-gray-100">
      <Ionicons name="chevron-back-sharp" size={20} color="black" />
    </Pressable>
  );
};

export default BackButton;
