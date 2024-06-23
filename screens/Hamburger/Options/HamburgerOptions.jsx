import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";
import { motify } from "moti";

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const NotificationBadge = (prop) => {

    return (
        <View>
            <MotiButton
                className="flex flex-row justify-between bg-black text-white px-6 py-4 rounded-xl w-[90%] mx-auto mt-2"
               
            >
                <View className="w-[70%]">
                    <Text className="text-white text-normal font-normal tracking-wider leading-5 my-auto">{prop.notification}</Text>
                </View>
                <View>
                    <Text className="text-gray-500 my-auto">→</Text>
                </View>
            </MotiButton>
        </View>
    );
};

export default NotificationBadge;
