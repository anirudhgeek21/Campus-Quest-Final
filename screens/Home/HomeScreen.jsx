import React from "react";
import { View,  TouchableOpacity, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Event from './Events/Event.jsx';
import NearCard from './NearCard/NearCard.jsx';
import { styled } from 'nativewind';
import { motify } from 'moti';

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
                            <MotiButton className="justify-start bg-black pt-4 ml-[-8px]">
                                <Text className="text-blue-400 text-xs font-black font-sans tracking-[1.13px] px-8 pb-3">Our Upcoming Events</Text>
                            </MotiButton>
                            <ScrollView horizontal style={styles.horizontalScrollView} contentContainerStyle={styles.horizontalScrollContainer}>
                                <Event />
                                <Event />
                                <Event />
                            </ScrollView>
                        </View>

                        <View style={styles.section}>
                            <View className="flex flex-row justify-between  bg-black ml-[-8px]">
                                <MotiButton>
                                    <Text className="text-blue-400 text-xs font-black font-sans tracking-[1.13px] px-8 mb-[-14px]">Cards near you</Text>
                                </MotiButton>
                                <MotiButton>
                                    <Text className="text-blue-400 text-xs font-light font-sans tracking-[1.1px] px-3 mb-[-14px] mt-[1px]">Capture</Text>
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
