import React from "react";
import { View, Text } from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const MotiView = motify(View)();

const EventCard = (prop) => {
    return (
        <MotiView
            className="flex justify-around"
            from={{
                opacity: 0,
                translateY: -50,
            }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{
                type: 'timing',
                duration: 1000,
            }}
        >
            <Text className="text-blue-100 text-center font-extrabold -tracking-[0.3px] text-xl">{prop.name}</Text>
            <View className="w-[40%] mx-auto flex flex-row justify-around mt-3">
                <View style={{ width: 30, height: 30, backgroundColor: 'gold', borderRadius: 25 }} >
                    <Text className="text-black font-bold text-center my-auto">2</Text>
                </View>
                <View style={{ width: 30, height: 30, backgroundColor: 'silver', borderRadius: 25 }}>
                    <Text className="text-black font-bold text-center my-auto">2</Text>
                </View>
                <View style={{ width: 30, height: 30, backgroundColor: '#CD7F32', borderRadius: 25 }}>
                    <Text className="text-black font-bold text-center my-auto">2</Text>
                </View>
            </View>
            <Text className="text-white font-thin text-center mt-4">{prop.time}</Text>
            <Text className="text-white font-thin text-center mt-1 mb-2">{prop.location}</Text>
        </MotiView>
    );
}

export default EventCard;
