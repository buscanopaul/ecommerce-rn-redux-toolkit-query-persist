import React from 'react';
import { ImageBackground, Text, View } from 'react-native';

const FavoriteFirstItem = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1536293283170-b4604bbe272f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      }}
      imageStyle={{
        height: 200,
        width: '100%',
        resizeMode: 'cover',
        borderRadius: 40,
        position: 'relative',
      }}
    >
      <View className="flex justify-center items-center absolute top-20 right-0 bottom-0 left-0">
        <Text className="font-sans text-light text-2xl">Ready to</Text>
        <Text className="font-sans text-light text-2xl">Buy?</Text>
        <Text className="font-serif text-primary text-lg">#SALE</Text>
      </View>
    </ImageBackground>
  );
};

export default FavoriteFirstItem;
