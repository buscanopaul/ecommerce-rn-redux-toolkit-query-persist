import { Feather } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { ProductData } from '../../typings';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import ProductAttributes from '../components/ProductAttributes';
import ProductInfoDescription from '../components/ProductInfoDescription';
import ProductInfoImage from '../components/ProductInfoImage';
import { addItem } from '../redux/cartSlice';

type RootStackParamList = {
  Cart: undefined;
  Details: { item: ProductData };
};

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Cart'>;

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  navigation: CartScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

const ProductInfoScreen = ({ route, navigation }: Props) => {
  const { item } = route.params;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }));
    navigation.navigate('Cart');
  };

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <BackButton onPress={handleBack} />,
      headerRight: () => (
        <Pressable
          className="bg-gray100 p-2 rounded-full"
          onPress={handleAddToCart}
        >
          <Feather name="shopping-bag" size={18} color="black" />
        </Pressable>
      ),
    });
  }, [navigation]);

  return (
    <View className="bg-light flex-1 relative">
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 pt-5">
        <ProductInfoImage item={item} />
        <ProductInfoDescription item={item} />
        <ProductAttributes item={item} />
      </ScrollView>
      <Button onPress={handleAddToCart}>Add to Cart</Button>
    </View>
  );
};

export default ProductInfoScreen;
