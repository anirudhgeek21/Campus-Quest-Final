import React from "react";
import { View,  TouchableOpacity, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { motify } from 'moti';

import HamburgerNav from './HamburgerNav.jsx';
import HamburgerOptions from './Options/HamburgerOptions.jsx'

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const HamburgerScreen = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                >
                    <View>
                        <HamburgerNav />
                    </View>
                    
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        
                        <View>
                            <HamburgerOptions notification="Account Center"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Visit Our Website"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Time Spent"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="About"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Our Team"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Preferences"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Account Privacy"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Accessibility"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Terms and Conditions"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Privacy Policies"/>
                        </View>
                        <View>
                            <HamburgerOptions notification="Contact 24 x 7"/>
                        </View>
                        <View className="mb-16">
                            <HamburgerOptions notification="Help"/>
                        </View>
                    </ScrollView>

                    
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

export default HamburgerScreen;
