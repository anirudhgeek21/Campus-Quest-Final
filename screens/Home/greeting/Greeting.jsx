import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const Greeting = () =>{
    return(
        <View className="justify-around">
            
            <MotiButton className="justify-start bg-black pt-2 ml-[-8px]">
                <Text className="text-orange-500 text-xl font-[350] font-sans tracking-[2px] px-8">Hello,</Text>
                <Text className="text-orange-500 text-xl font-[350] font-sans tracking-[2px] px-8 pb-4">Anirudh !</Text>
            </MotiButton>
            
        </View>
    )
}


  
  
export default Greeting;