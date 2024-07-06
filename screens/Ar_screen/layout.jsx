import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import TopName from '../TopName/TopName';
import Navbar from '../Navigation/Navbar';
import CollectionCard from './CollectionCard';
import CollectionOverview from './CollectionOverview';
import { ScrollView, motify } from 'moti';

const StyledButton = styled(TouchableOpacity);
const MotiButton = motify(StyledButton)();
const Container = motify(View)();

const Layout = ({ navigation }) => {
    const [nearby, setNearby] = useState([
        { name: "SAMRTH MISHRA", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ANMOL GAUR", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ANIRUDH", rarity: "exotic", points: "1000", lat: "", lon: "" },
        { name: "ojas", rarity: "vcommon", points: "100", lat: "", lon: "" }
    ]);

    const clrmap = {
        exotic: "#d4af37",
        vcommon: "green",
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
                <StatusBar barStyle="light-content" />
                <View className="mt-[-14%]">
                    <TopName />
                </View>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={{ alignItems: 'center', marginVertical: 24 }}>
                    <Text className="text-violet-300 text-sm font-black font-sans tracking-[1.13px] px-8 pb-3 mt-0 text-left ">
                        Start collecting tokens around you 
                    </Text>
                </View>

                <View style={{ flex: 1, alignItems: 'center' }} className="mb-8 bg-white text-black px-4 py-2 rounded-full w-[40%] mx-auto mt-[-2%]">
                    <TouchableOpacity onPress={() => navigation.navigate("camera")}>
                        <Text className="">OPEN CAMERA</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginHorizontal: '10%' }}>
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
                </View>
                
                
                </ScrollView>
                <View className="mb-[-8%]">
                    <Navbar />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};


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

export default Layout;