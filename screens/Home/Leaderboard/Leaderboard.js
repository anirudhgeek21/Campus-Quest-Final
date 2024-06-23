import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const MotiView = motify(View)();

const Leaderboard = () => {
    const leaderboardData = [
        { position: 1, username: "User1", cardsCollected: 150, color: "#9333ea" },
        { position: 2, username: "User2", cardsCollected: 120, color: "#7e22ce" },
        { position: 3, username: "User3", cardsCollected: 100, color: "#6b21a8" },
        { position: 4, username: "User4", cardsCollected: 80, color: "#581c87" },
        { position: 5, username: "User5", cardsCollected: 60, color: "#3b0764" },
        { position: 6, username: "User6", cardsCollected: 100, color: "#030712" },
        { position: 7, username: "User7", cardsCollected: 80, color: "#030712" },
        { position: 8, username: "User8", cardsCollected: 60, color: "#030712" },
    ];

    return (
        <MotiView className="mr-4">
            <MotiView className="justify-start bg-black w-[100%] mx-auto px-5 mt-7 rounded-2xl -z-20 ml-3">
                {leaderboardData.map((item, index) => (
                    <MotiButton
                        key={index}
                        style={{ backgroundColor: item.color }}
                        className="rounded-lg p-2 mt-2 flex flex-row justify-around"
                        transition={{
                            type: 'timing',
                            duration: 1000,
                        }}
                    >
                        <Text className="text-white text-sm font-bold ">{item.position} </Text>
                        <Text className="text-white text-sm ">{item.username}</Text>
                        <Text className="text-white text-sm ">{item.cardsCollected}</Text>
                    </MotiButton>
                ))}
            </MotiView>
        </MotiView>
    );
}

export default Leaderboard;
