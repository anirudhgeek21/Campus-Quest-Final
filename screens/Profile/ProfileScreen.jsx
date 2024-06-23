import React from "react";
import { View,  TouchableOpacity, Text, ImageBackground, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import Greeting from "./greeting/Greeting.jsx";
import ProfileInfo from "./ProfileInfo.jsx";
import CollectionCard from "./Collection/CollectionCard.jsx";
import CollectionOverview from "./Collection/CollectionOverview.jsx";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import { motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const ProfileScreen = () => {
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
                        <View>
                            <Greeting />
                        </View>
                        <View>
                            <ProfileInfo />
                        </View>
                        <View>
                            <CollectionOverview />
                        </View>
                        <Container className="flex flex-row mx-auto mt-[-13px]">
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            
                        </Container>
                        <Container className="flex flex-row mx-auto mt-[-40px]">
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            
                        </Container>
                        <Container className="flex flex-row mx-auto mt-[-40px]">
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            <View>
                                <CollectionCard class="w-1/2" />
                            </View>
                            
                        </Container>
                        
                        

                        
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

export default ProfileScreen;
