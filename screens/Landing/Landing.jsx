import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import { motify } from 'moti';
import { styled } from 'nativewind';


import BackgroundImage2 from '../../assets/background/bullseye-gradient.png';

const Container = motify(View)();
const HeaderText = motify(Text)();
const NextButton = motify(TouchableOpacity)();
const ButtonText = motify(Text)();


const LandingPage = ({navigation}) => {
  

  return (
    <ImageBackground
      
      style={styles.backgroundImage}
    >
      <Container className='flex-1 p-4 bg-transparent my-auto'>
        <Container className="my-auto flex h-[23%]">
          <Text className='text-white text-5xl font-extrabold my-auto text-center mx-7 '>
            Welcome to
          </Text>
          <Text className='text-white text-5xl font-extrabold my-auto text-center mx-10 mt-6'>
            Campus Quest
          </Text>
          <Text className='text-white text-xl font-extralight my-auto text-center mx-10 mt-16'>
            Your next adventure and fun place
          </Text>
        </Container>



        <NextButton
            onPress={() => {navigation.navigate("LoginScreen")}}
            className='bg-blue-700 p-2 mb-16 rounded-lg items-center w-[80%] mx-auto'
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
              →
            </ButtonText>
          </NextButton>



        
      </Container>
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: "#000000",
    flex: 1,
    resizeMode: 'cover',
    height: windowHeight, 
  },
});

export default LandingPage;