import React from "react";
import { View, Text, Image ,TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';
import Indiagate from './indiagate.webp';

const MotiView = motify(View)();
const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const CollectionCard = () => {
    return (
        <MotiButton
            className="bg-black rounded-xl p-4 px-3 m-4 ml-6 items-center"
            
            transition={{
                type: 'timing',
                duration: 1000,
            }}
        >
            <View className="relative items-center">
                <Image 
                    source={Indiagate}
                    className="w-24 h-24 rounded-lg"
                />
                <Text className="text-white absolute left-[-40px] top-[20px] transform rotate-90 font-bold text-lg">
                    RUBY
                </Text>
            </View>
            <Text className="mt-2 text-white font-extrabold text-lg text-center">
                India Gate
            </Text>
            <Text className="mt-1 text-white text-xs font-thin text-center">
                Fragment No:- 8
            </Text>
            <Text className="mt-1 text-white text-xs font-thin text-center">
                Within: 5 Km
            </Text>
            
        </MotiButton>
    );
}

export default CollectionCard;
