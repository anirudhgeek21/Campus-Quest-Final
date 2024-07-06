import {React, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image, Pressable, SafeAreaView } from 'react-native';
import { ScrollView, motify } from 'moti';
import { styled } from 'nativewind';
import { Link } from 'expo-router';

import BackgroundImage1 from '../../assets/background/cornered-stairs.png';
import BackgroundImage2 from '../../assets/background/bullseye-gradient.png';
import GoogleLogo from '../../assets/background/gmail-logo.png';
import AppleLogo from '../../assets/background/apple-logo.png';
import FacebookLogo from '../../assets/background/facebook-logo.png';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const Container = motify(View)();
const HeaderText = motify(Text)();
const InputField = motify(TextInput)();
const SignupButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();
const LogoImage = motify(Image)(); 

const LoginScreen = ({navigation}) => {
  

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content"/>
    <View className="mt-[24%]">
          <Text className='text-white text-4xl font-extrabold text-center  px-5'>
            Welcome to Campus Quest
          </Text>
          <Text className='text-white text-xl font-thin text-center mt-3 px-16'>
            Your next adventure and fun place
          </Text>
    </View>

    <View className="mt-[29%] mx-[10%]">
      <TextInput className='bg-gray-950 text-white p-4 mb-3 rounded-lg'
            placeholder="Enter your email"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCompleteType="email"/>
      <TextInput  className='bg-gray-950 text-white p-4 mb-3 rounded-lg'
            placeholder="Create a password"
            placeholderTextColor="#888888"
            secureTextEntry={true}
            autoCompleteType="password" />
      <SignupButton
           onPress={() => {navigation.navigate("HomeScreen")}}
            className='bg-blue-700 p-4 py-3 rounded-lg items-center'

            animate={{
              
              scale: 1,
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              type: 'spring',
              duration: 500,
            }}
          >
            <ButtonText className='text-white text-lg font-bold'>
              Login
            </ButtonText>
          </SignupButton>
    </View>

    <View className="mx-auto mt-[20%]">
      <View className="flex-row">
                <LogoImage source={GoogleLogo} style={styles.logo} />
                <LogoImage source={AppleLogo} style={styles.logo} />
                <LogoImage source={FacebookLogo} style={styles.logo} />
      </View>
    </View>
    

    <View className="mt-2 mx-auto">
          <Text className='text-white text-lg mt-9 font-thin text-center'>
            Not a user ? <Text className="text-blue-400" onPress={() => {navigation.navigate("SignupScreen")}}>Signup</Text> 
          </Text>
        </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexGrow : 1,
    justifyContent : "center",
    alignItems : "center",
  },
  backgroundImage: {
    position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
    // resizeMode: 'cover',
    // // justifyContent : "center",
  },
  logo: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
    
  },
});

export default LoginScreen;