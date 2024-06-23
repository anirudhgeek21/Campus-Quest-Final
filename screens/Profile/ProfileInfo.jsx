import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';
import ProfilePic from './profile.png'

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();
const ProfileImage = styled(Image);

const ProfileInfo = () => {
    return (
        <Container className="flex-row items-center p-4 bg-black rounded-lg shadow justify-between px-5 pr-7">
            <ProfileImage 
                source={ProfilePic} 
                className="w-24 h-24 rounded-lg mr-4"
            />
            <View className="flex-col">
                <Text className="text-lg text-white font-extrabold">Anirudh Prajapati</Text>
                <Text className="text-sm text-gray-600 font-light">NSUT</Text>
                <Text className="text-sm text-green-300 font-light">Elite</Text>
            </View>
        </Container>
    )
}

export default ProfileInfo;
