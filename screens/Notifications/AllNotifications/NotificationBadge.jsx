import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styled } from "nativewind";
import { motify } from "moti";

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const NotificationBadge = (props) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked); 
    };

    return (
        <View>
            <MotiButton
                className={`flex flex-row justify-between bg-gray-950 px-6 py-4 rounded-xl w-[90%] mx-auto mt-3 ${clicked ? 'text-slate-500' : 'text-white'}`}
                onPress={handleClick}
            >
                <View className="w-[70%]">
                    <Text className={`font-normal tracking-wider leading-5 my-auto ${clicked ? 'text-slate-500' : 'text-white'}`}>
                        {props.notification}
                    </Text>
                </View>
                <View>
                    <Text className="text-gray-500 my-auto">{props.time}</Text>
                </View>
            </MotiButton>
        </View>
    );
};

export default NotificationBadge;
