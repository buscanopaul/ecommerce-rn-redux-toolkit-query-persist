import React, { useState } from 'react';
import { Image, View } from 'react-native';
import { ProductData } from '../../typings';
import ProductInfoImageItem from './ProductInfoImageItem';

type Props = {
  item: ProductData;
};

const IMAGES = [
  {
    id: '1',
    imageURL:
      'https://img.freepik.com/premium-photo/portrait-young-blonde-girl-wearing-winter-jacket-with-hood-cigarette-mouth-isolated-white-background_530697-17341.jpg',
  },
  {
    id: '2',
    imageURL:
      'https://dynamic.zacdn.com/4LihwMiTUHJ_0E4dY1rYXY7VT6s=/fit-in/346x500/filters:quality(95):fill(ffffff)/https://static-ph.zacdn.com/p/zalia-basics-5386-6722642-1.jpg',
  },
  {
    id: '3',
    imageURL: 'https://cf.shopee.ph/file/cdba21d043b6b2b32e0b8a47978510b1',
  },
];

const ProductInfoImage = ({ item }: Props) => {
  const [currentImage, setCurrentImage] = useState(item.imageUrl);
  const [currentId, setCurrentId] = useState(0);

  const handleCurrentImage = (index: number) => {
    setCurrentImage(IMAGES[index].imageURL);
    setCurrentId(index);
  };

  return (
    <View className="relative">
      <Image
        source={{
          uri: currentImage,
        }}
        className="w-full h-[300] rounded-[40px]"
        resizeMode="cover"
      />
      <View className="flex flex-row justify-between mt-5">
        {IMAGES.map((image, index) => (
          <ProductInfoImageItem
            key={image.id}
            index={index}
            currentId={currentId}
            imageURL={image.imageURL}
            onPress={() => handleCurrentImage(index)}
          />
        ))}
      </View>
    </View>
  );
};

export default ProductInfoImage;
