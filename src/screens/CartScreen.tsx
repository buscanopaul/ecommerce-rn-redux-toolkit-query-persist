import React from 'react';
import { Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductData } from '../../typings';
import Button from '../components/Button';
import CartBreakDownItem from '../components/CartBreakDownItem';
import CartItem from '../components/CartItem';
import { RootState } from '../redux/store';

type Props = {};

const windowWidth = Dimensions.get('window').width;

const CartScreen = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  const subTotal = cart?.reduce(
    (accumulator: number, currentValue: ProductData) => {
      const quantity = currentValue.quantity ?? 0;
      return accumulator + currentValue.price * quantity;
    },
    0
  );

  const handleCheckout = () => {
    console.log(cart);
  };

  const renderItem = ({ item }: { item: ProductData }) => (
    <CartItem item={item} />
  );

  return (
    <View className="flex-1 bg-light" style={{ width: windowWidth }}>
      {cart.length > 0 ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            className="px-4 pt-5"
          >
            <FlatList
              scrollEnabled={false}
              data={cart}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
            />
            <View className="mb-5" />
            <View className="mb-10 bg-dark rounded-[40px] px-8 pt-7 pb-5 justify-center">
              <CartBreakDownItem title="Sub Total" price={subTotal} />
              <CartBreakDownItem title="Shipping" price={50.0} />
              <CartBreakDownItem
                title="Total"
                price={subTotal + 50}
                isTotal={true}
              />
            </View>
          </ScrollView>
          <Button onPress={handleCheckout}>CHECKOUT</Button>
        </>
      ) : (
        <View className="flex-1 justify-center items-center">
          <Text className="font-sans text-darkColor text-2xl">Empty Cart</Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
