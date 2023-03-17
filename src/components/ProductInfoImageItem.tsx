import React from 'react';
import { Image, Pressable, useWindowDimensions } from 'react-native';
import { Colors } from '../constants/Colors';

type Props = {
  imageURL: string;
  onPress: () => void;
  index: number;
  currentId: number;
};

const ProductInfoImageItem = ({
  imageURL,
  onPress,
  index,
  currentId,
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable onPress={onPress}>
      <Image
        source={{
          uri: imageURL,
        }}
        className={`h-24 rounded-2xl`}
        resizeMode="cover"
        style={{
          width: width / 4,
          borderWidth: index === currentId ? 2 : 0,
          borderColor: Colors.primary,
        }}
      />
    </Pressable>
  );
};

export default ProductInfoImageItem;
