import React from "react";
import { View,  TouchableOpacity, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Event from './Events/Event.jsx';
import NearCard from './NearCard/NearCard.jsx';
import TrendingTrade from './TrendingTrade/TrendingTrade.jsx'
import { styled } from 'nativewind';
import { motify } from 'moti';
import Leaderboard from "./Leaderboard/Leaderboard.js";

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const HomeScreen = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                >
                    <View>
                        <TopName />
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <View style={styles.section}>
                            <MotiButton className="justify-start bg-black pt-6 ml-[-8px]">
                                <Text className="text-violet-300 text-xs font-black font-sans tracking-[1.13px] px-8 pb-3">Our Upcoming Events</Text>
                            </MotiButton>
                            <ScrollView horizontal style={styles.horizontalScrollView} contentContainerStyle={styles.horizontalScrollContainer}>
                                <Event />
                                <Event />
                                <Event />
                            </ScrollView>
                        </View>

                        <View style={styles.section}>
                            <View className="flex flex-row justify-between  bg-black ml-[-8px] mt-[8px]">
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-black font-sans tracking-[1.13px] px-8 mb-[-14px]">Cards near you</Text>
                                </MotiButton>
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-light font-sans tracking-[1.1px] px-3 mb-[-14px] mt-[1px]">Capture</Text>
                                </MotiButton>
                            </View>
                            <ScrollView horizontal style={styles.horizontalScrollView} contentContainerStyle={styles.horizontalScrollContainer}>
                                <NearCard />
                                <NearCard />
                                <NearCard />
                                <NearCard />
                                <NearCard />
                                <NearCard />
                            </ScrollView>
                        </View>

                        <View style={styles.section}>
                            <View className="flex flex-row justify-between  bg-black ml-[-8px] mt-[-20px]">
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-black font-sans tracking-[1.13px] px-8 mb-[-14px]">Trending trade offers</Text>
                                </MotiButton>
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-light font-sans tracking-[1.1px] px-3 mb-[-14px] mt-[1px]">Global Trade</Text>
                                </MotiButton>
                            </View>
                            <ScrollView horizontal style={styles.horizontalScrollView} contentContainerStyle={styles.horizontalScrollContainer}>
                                <TrendingTrade />
                                <TrendingTrade />
                                <TrendingTrade />
                                <TrendingTrade />
                                <TrendingTrade />
                                <TrendingTrade />
                            </ScrollView>
                        </View>



                        <View style={styles.section}>
                            <View className="flex flex-row justify-between  bg-black ml-0 mt-[-7px]">
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-black font-sans tracking-[1.13px] px-8 mb-[-14px]">Daily Leaderboard</Text>
                                </MotiButton>
                                <MotiButton>
                                    <Text className="text-violet-300 text-xs font-light font-sans tracking-[1.1px] px-3 mb-[-14px] mt-[1px] mr-3">View all stats</Text>
                                </MotiButton>
                            </View>
                            <View style={styles.horizontalScrollView} contentContainerStyle={styles.horizontalScrollContainer}>
                                <Leaderboard />
                            </View>
                        </View>

                        
                    </ScrollView>

                    <View>
                        <Navbar />
                    </View>
                </ImageBackground>
            </View>
        </SafeAreaProvider>
    );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
        backgroundColor: "#000000",
    },
    scrollContainer: {
        flexGrow: 1,
        paddingTop: 4,
    },
    section: {
        marginBottom: 24,
    },
    horizontalScrollView: {
        flexGrow: 0,
    },
    horizontalScrollContainer: {
        flexDirection: 'row',
        paddingHorizontal: 0,
    },
});

export default HomeScreen;
