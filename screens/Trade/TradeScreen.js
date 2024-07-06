import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView, motify } from 'moti';
import YourTrade from './Your/YourTradeScreen';
import GlobalTrade from './Global/GlobalTradeScreen';
import BackgroundImage2 from '../../assets/background/bullseye-gradient.png';
import Navbar from "../Navigation/Navbar.jsx";
import TopName from "../TopName/TopName.jsx";
import AddCardButton from './AddCardButton.js';

const TradeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('YourTrade');

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ImageBackground
         className= "bg-gray-950"
          style={styles.backgroundImage}
        >
        <View>
             <TopName />
        </View>
        
          <View style={styles.navbar} className="bg-gray-950">
            <TouchableOpacity onPress={() => setSelectedTab('YourTrade')}>
              <Text style={[styles.navText, selectedTab === 'YourTrade' && styles.activeTab]}>YOUR TRADE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab('GlobalTrade')}>
             <Text style={[styles.navText,selectedTab==='GlobalTrade' && styles.activeTab]}>GLOBAL TRADE</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.content}>
            {selectedTab === 'YourTrade' ? <YourTrade /> : <GlobalTrade />}
          </View>
          <View>
          {selectedTab==='YourTrade' && <AddCardButton/>}
        
          </View>
          <View className="bg-gray-950">
            <Navbar />
        </View>
        </ImageBackground>
      </View>
      </SafeAreaProvider>
    
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'bg-gray-950',
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,  
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    
  },
  navText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 8, 
  },
  activeTab: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
  },
 
});

export default TradeScreen;
