import React from "react";
import { View , Text , TouchableOpacity} from "react-native";
import { styled } from 'nativewind';
import Svg, { Path } from 'react-native-svg';
import { motify } from 'moti';
import { useNavigation } from '@react-navigation/native';


const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();


const HamburgerNav = () =>{
    const navigation = useNavigation();
    return(
        <View className="flex flex-row pt-14 justify-around bg-black ">
            <Container>
                <MotiButton className="justify-center items-center mt-[7.4px] ml-1" onPress={() => navigation.navigate('HamburgerScreen')}>
                    <HamburgerIcon />
                </MotiButton>
            </Container>
            <MotiButton className="justify-start bg-black pt-2">
                <Text className="text-violet-300 text-xl font-black font-sans tracking-[1.7px] px-8 pb-3">Notifications</Text>
            </MotiButton>
            <Container>
                <MotiButton className="justify-center items-center mt-[9px]" onPress={() => navigation.navigate('HomeScreen')}>
                    <HomeIcon />
                </MotiButton>
            </Container>
        </View>
    )
}

const HomeIcon = () => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Svg>
  );
const HamburgerIcon = () => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="#636265">
      <Path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
    </Svg>
);

const CrossIcon = () => (
    <Svg width="28" height="28" viewBox="0 0 24 24" fill="#636265">
      <Path d="M18.36 6.64L12 13.01 5.64 6.64 4.22 8.05 10.59 14.42 4.22 20.79 5.64 22.21 12 15.84 18.36 22.21 19.78 20.79 13.41 14.42 19.78 8.05z" />
    </Svg>
  );
  
  
const NotificationBellIcon = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="#636265">
      <Path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10 3.17 10 4v.68C7.13 5.36 5.5 7.92 5.5 11v5l-1.7 1.7c-.14.14-.22.33-.22.53 0 .41.34.75.75.75h14c.41 0 .75-.34.75-.75 0-.2-.08-.39-.22-.53L18 16z" />
    </Svg>
);

//notification when there is notification then colour = #00A9FF
  
  
export default HamburgerNav;