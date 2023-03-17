import { Feather } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Colors } from '../constants/Colors';
import HomeScreen from '../screens/HomeScreen';

type Props = {};

const Stack = createNativeStackNavigator();

const HomeNavigation = (props: Props) => {
  const handleSearch = () => {
    console.log('search');
  };

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShadowVisible: false }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerLeft: () => (
            <Text className="font-serif tracking-tight">NEW ARRIVALS</Text>
          ),
          headerRight: () => (
            <Pressable
              onPress={handleSearch}
              className={`rounded-full p-2`}
              style={{ backgroundColor: Colors.gray }}
            >
              <Feather name="search" size={17} color="black" />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
