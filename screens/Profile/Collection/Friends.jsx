import React from "react";
import { View, Text ,TouchableOpacity } from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const Container = motify(View)();
const FlexRowContainer = styled(View);

const NumberBox = (prop) => (
    <FlexRowContainer className="flex-col items-center bg-black rounded-lg mx-2 mt-[-16px]">
        <MotiButton className="text-center">
            <Text className="text-base font-light text-white text-center">{prop.number}</Text>
            <Text className="text-sm text-gray-600 font-light text-center">{prop.name}</Text>
        </MotiButton>
    </FlexRowContainer>
);

const Friends = () => {
    return (
        <Container className="flex-row justify-around p-4 bg-black w-[75%] rounded-xl mx-auto">
            <NumberBox number="3" name="Cards"/>
            <NumberBox number="8" name="Followers"/>
            <NumberBox number="19" name="Following"/>
           
        </Container>
    )
}

export default Friends;
