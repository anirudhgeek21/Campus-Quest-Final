import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);

const MotiButton = motify(StyledButton)();

const Navbar = () => {
  return (
    <View className="w-full">
      <View className="w-full flex-row justify-around items-center px-5">
        <MotiButton className="justify-center items-center p-2 pt-0 mb-5">
          <EventsIcon />
        </MotiButton>
        <MotiButton className="justify-center items-center p-2 pt-0 mb-5">
          <PlayIcon />
        </MotiButton>
        <View>
          <MotiButton className="justify-center bg-gray-950 items-center rounded-full relative bottom-7 pt-7 px-4">
            <HomeIcon />
          </MotiButton>
        </View>
        <MotiButton className="justify-center items-center p-2 pt-0 mb-5">
          <TradingIcon />
        </MotiButton>
        <MotiButton className="justify-center items-center p-2 pt-0 mb-5">
          <ProfileIcon />
        </MotiButton>
      </View>
    </View>
  );
};

const EventsIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill="white">
    <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Svg>
);

const PlayIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill="white">
    <Path d="M8 5v14l11-7z" />
  </Svg>
);

const HomeIcon = () => (
  <Svg width="55" height="55" className="" viewBox="0 0 24 24" fill="white">
    <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </Svg>
);

const ProfileIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill="white">
    <Path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </Svg>
);

const TradingIcon = () => (
  <Svg width="30" height="30" viewBox="0 0 24 24" fill="white">
    <Path d="M16 6l2.29 2.29-7.88 7.88-4.29-4.3-1.41 1.42L10.41 19 18 11.41 20.71 14V6z" />
  </Svg>
);

export default Navbar;