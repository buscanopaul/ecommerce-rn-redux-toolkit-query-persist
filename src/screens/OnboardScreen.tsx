import { StackNavigationProp } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../constants/Colors';
import { setOnBoard } from '../redux/userSlice';

type RootStackParamsList = {
  Root: undefined;
  Onboard: undefined;
};

type OnboardScreenProps = {
  navigation: StackNavigationProp<RootStackParamsList, 'Onboard'>;
};

const OnboardScreen = ({ navigation }: OnboardScreenProps) => {
  const dispatch = useDispatch();

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

  const handleStarted = () => {
    dispatch(setOnBoard(false));
    navigation.navigate('Root');
  };

  return (
    <SafeAreaView className="flex-1 justify-between items-center bg-dark">
      <Image
        source={require('../../assets/images/bg_onboard.png')}
        className="h-4/6 w-full"
        style={{ resizeMode: 'contain' }}
      />
      <View className="items-center">
        <Text className="font-sans text-light text-5xl">ADD</Text>
        <Text
          className={`font-serif uppercase text-lg mb-10`}
          style={{ color: Colors.primary }}
        >
          #Express <Text className="font-sans">yourself</Text>
        </Text>
        <Pressable
          onPress={handleStarted}
          className="bg-light py-5 px-8 rounded-full"
        >
          <Text className="font-serif uppercase text-lg">Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default OnboardScreen;
