import React from "react";
import { View,  TouchableOpacity, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { motify } from 'moti';

import NotificationNav from './NotificationNav.jsx';
import NotificationBadge from './AllNotifications/NotificationBadge.jsx';



const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();

const NotificationScreen = () => {
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                >
                    <View>
                        <NotificationNav />
                    </View>

                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        
                        <View>
                            <NotificationBadge notification="Anmol gaur recently found a Taj Mahal card" time="2 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Your have a new friend request from Samarth Mishra" time="10 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="We are launching a new update !" time="23 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Your have a new friend request from Sashrikaa Loomba" time="29 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Ojas recently found a Great wall of China card" time="40 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="You unlocked a new achievement" time="50 min ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="There is a rare card near you" time="1 hr ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Your have a new friend request from Anirudh" time="1 hr ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Joining bonus exclusively for you" time="1 hr ago"/>
                        </View>
                        <View>
                            <NotificationBadge notification="Check your email for verification mail and a special gift from us" time="2 hr ago"/>
                        </View>
                        <View className="mb-16">
                            <NotificationBadge notification="Hello Welcome to this wonderfull app" time="2 hr ago"/>
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

export default NotificationScreen;
