import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import Svg, { Path } from 'react-native-svg';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const TopName = () =>{
    return(
        <View className="flex flex-row pt-14 justify-around">
            <Container>
                <MotiButton className="justify-center items-center mt-[6.8px]">
                    <HamburgerIcon />
                </MotiButton>
            </Container>
            <MotiButton className="justify-start bg-black pt-2">
                <Text className="text-blue-400 text-xl font-black font-sans tracking-[1.7px] px-8 pb-3">Campus Quest</Text>
            </MotiButton>
            <Container>
                <MotiButton className="justify-center items-center mt-[12px]">
                    <NotificationBellIcon />
                </MotiButton>
            </Container>
        </View>
    )
}


const HamburgerIcon = () => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="#636265">
      <Path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </Svg>
);

const NotificationBellIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="#636265">
      <Path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10 3.17 10 4v.68C7.13 5.36 5.5 7.92 5.5 11v5l-1.7 1.7c-.14.14-.22.33-.22.53 0 .41.34.75.75.75h14c.41 0 .75-.34.75-.75 0-.2-.08-.39-.22-.53L18 16z" />
    </Svg>
);
  
  
export default TopName;