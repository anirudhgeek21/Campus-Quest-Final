import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, motify } from 'moti';
import { styled } from 'nativewind';

import GoogleLogo from '../../assets/background/gmail-logo.png';
import AppleLogo from '../../assets/background/apple-logo.png';
import FacebookLogo from '../../assets/background/facebook-logo.png';
import BackgroundImage2 from '../../assets/background/your-background-image.png'; // Import your background image
import { StatusBar } from 'expo-status-bar';

const Container = motify(View)();
const HeaderText = motify(Text)();
const InputField = motify(TextInput)();
const SignupButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();
const LogoImage = motify(Image)();

const SignupScreen = ({ navigation }) => {
  const handleSignup = () => {
    // Handle signup button press
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <ImageBackground source={BackgroundImage2} style={styles.backgroundImage}>
            <Container className="flex-1 p-4 bg-transparent justify-around">
              <Container className="my-auto flex h-[50%]">
                <Text className="text-white text-4xl font-extrabold my-auto text-center mx-10 mt-20">
                  Welcome to Campus Quest
                </Text>
                <Text className="text-white text-xl font-thin my-auto text-center mx-10 mt-[-150px]">
                  Your next adventure and fun place
                </Text>
              </Container>

              <View className="mt-[20%] mx-[10%]">
                <TextInput
                  className="bg-gray-800 text-white p-4 mb-3 rounded-lg"
                  placeholder="Enter your username"
                  placeholderTextColor="#888888"
                  keyboardType="default"
                  autoCapitalize="none"
                  autoCompleteType="username"
                />
                <TextInput
                  className="bg-gray-800 text-white p-4 mb-3 rounded-lg"
                  placeholder="Enter your email"
                  placeholderTextColor="#888888"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCompleteType="email"
                />
                <TextInput
                  className="bg-gray-800 text-white p-4 mb-3 rounded-lg"
                  placeholder="Create a password"
                  placeholderTextColor="#888888"
                  secureTextEntry={true}
                  autoCompleteType="password"
                />
                <SignupButton
                  onPress={handleSignup}
                  className="bg-blue-700 p-4 py-3 rounded-lg items-center"
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
                  <ButtonText className="text-white text-lg font-bold">Signup</ButtonText>
                </SignupButton>
              </View>

              <View className="mx-auto mt-[10%]">
                <Text className="text-white text-lg font-thin mb-2 mx-auto">Or login using</Text>
                <View className="flex-row">
                  <LogoImage source={GoogleLogo} style={styles.logo} />
                  <LogoImage source={AppleLogo} style={styles.logo} />
                  <LogoImage source={FacebookLogo} style={styles.logo} />
                </View>
              </View>

              <View className="mt-2 mx-auto">
                <Text className="text-white text-xl font-thin text-center">
                  Already a user?{' '}
                  <Text className="text-blue-400" onPress={() => { navigation.navigate('Login'); }}>
                    Login
                  </Text>
                </Text>
              </View>
            </Container>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    backgroundColor: "#000000",
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  logo: {
    width: 27,
    height: 27,
    marginHorizontal: 10,
  },
});

export default SignupScreen;
