import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../constants/Colors';
import { RootState } from '../redux/store';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeNavigation from './HomeNavigation';

type Props = {};

const Tab = createBottomTabNavigator();

const RootNavigation = (props: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  const [fontsLoaded] = useFonts({
    FactBlack: require('../../assets/fonts/Fact-ExpandedBlack.ttf'),
    FactBold: require('../../assets/fonts/Fact-ExpandedBold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: 'black',
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen
        name="HomePage"
        component={HomeNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Text
              className="font-sans uppercase"
              style={{ color: focused ? Colors.primary : 'white' }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerTitleStyle: {
            fontFamily: 'FactBold',
          },
          tabBarBadge: cart?.length,
          tabBarBadgeStyle: {
            backgroundColor: Colors.primary,
            fontSize: 10,
            position: 'absolute',
            top: -3,
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color={focused ? Colors.primary : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          headerTitleStyle: {
            fontFamily: 'FactBold',
          },
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="hearto"
              size={24}
              color={focused ? Colors.primary : 'white'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="user"
              size={24}
              color={focused ? Colors.primary : 'white'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
