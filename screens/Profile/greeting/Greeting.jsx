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
            
            <MotiButton className="justify-start bg-black pt-2 ml-[-9px]">
                <Text className="text-violet-300 text-sm font-[350] font-sans tracking-[2px] px-8">Hello, Anirudh!</Text>
            </MotiButton>
            
        </View>
    )
}


  
  
export default Greeting;