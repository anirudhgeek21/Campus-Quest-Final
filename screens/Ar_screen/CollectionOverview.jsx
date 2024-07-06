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
            <Text className="text-xl font-semibold text-white text-center">{prop.number}</Text>
            <Text className="text-sm text-gray-600 font-light text-center">{prop.name}</Text>
        </MotiButton>
    </FlexRowContainer>
);

const CollectionOverview = () => {
    return (
        <Container className="flex-row justify-around p-4 bg-black w-[87%] rounded-xl mx-auto">
            <NumberBox number="3" name="Ruby"/>
            <NumberBox number="8" name="Gold"/>
            <NumberBox number="19" name="Silver"/>
            <NumberBox number="40" name="Bronze"/>
        </Container>
    )
}

export default CollectionOverview;
