import React from "react";
import { View, TouchableOpacity } from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';
import EventCard from './EventCard';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const Event = () => {
    return (
        <View className="mr-4">
            <MotiButton className="justify-start bg-gray-950 w-[90%] mx-auto p-4 px-5 mt-0 rounded-2xl">
                <EventCard name="Rare Card Trek" location="Lakshmi Nagar Quest" time="20th June - 25th July" />
            </MotiButton>
        </View>
    );
}

export default Event;
