import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useSelector } from 'react-redux';
import OnboardScreen from '../screens/OnboardScreen';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import RootNavigation from './RootNavigation';

type Props = {};

const Stack = createNativeStackNavigator();

const MainNavigation = (props: Props) => {
  const user = useSelector((state: any) => state.user.isOnboard);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? 'Onboard' : 'Root'}
        screenOptions={{ headerShadowVisible: false }}
      >
        <Stack.Screen
          name="Onboard"
          component={OnboardScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Root"
          component={RootNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfoScreen}
          options={{
            title: 'Women',
            headerTitleStyle: { fontFamily: 'FactBold' },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default MainNavigation;
