import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';
import EventCard from './EventCard';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const Event = () =>{
    return(
        <View>
            <MotiButton className="justify-start bg-black w-[90%] mx-auto p-8 mt-5 rounded-2xl">
                <EventCard />
            </MotiButton>
        </View>
    )
}

export default Event;