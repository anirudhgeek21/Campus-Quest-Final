import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";
import { motify } from "moti";

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const NotificationBadge = (prop) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); 
    };

    return (
        <View>
            <MotiButton
                className={`flex flex-row justify-between ${clicked ? 'bg-black' : 'bg-gray-950'} text-white px-6 py-4 rounded-xl w-[90%] mx-auto mt-3`}
                onPress={handleClick}
            >
                <View className="w-[70%]">
                    <Text className="text-white font-normal tracking-wider leading-5 my-auto">{prop.notification}</Text>
                </View>
                <View>
                    <Text className="text-gray-500 my-auto">{prop.time}</Text>
                </View>
            </MotiButton>
        </View>
    );
};

export default NotificationBadge;
