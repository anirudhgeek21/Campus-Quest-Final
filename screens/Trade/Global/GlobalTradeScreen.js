import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, Modal } from 'react-native';
import Card from '../Card/Card.js';

import AdditionalCards from './AdditionalCard.js';

const GlobalTradeScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const trendingCards = [
    { id: '3', name: 'Card 3', rarity: 'Rare', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A rare card featuring a breathtaking view of nature.' },
    { id: '4', name: 'Card 4', rarity: 'Gold', image: 'https://free-3dtextureshd.com/wp-content/webpc-passthru.php?src=https://free-3dtextureshd.com/wp-content/uploads/2024/03/10.jpg&nocache=1', offers: 'Live bets', description: 'A gold card depicting the dazzling city lights.' },
    { id: '5', name: 'Card 5', rarity: 'Platinum', image: 'https://a-static.besthdwallpaper.com/green-lake-mountain-wallpaper-1024x768-105353_18.jpg', offers: 'Live bets', description: 'A platinum card showcasing the vast expanse of space.' },
    { id: '6', name: 'Card 6', rarity: 'Gold', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsD_tPl-AkknRFuBqO95XXDob8bwQb9IHkQ&s', offers: 'Live bets', description: 'A gold card with an awe-inspiring view of the ocean.' },
    { id: '7', name: 'Card 7', rarity: 'Silver', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffree-3dtextureshd.com%2Fdownload%2Fwhite-horse-running-wallpaper-ultra-hd-4k-background-desktop-phone-free-download-138%2F&psig=AOvVaw2ENATEyrEq2AYFts4Clpid&ust=1719218308545000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJC3r7Wp8YYDFQAAAAAdAAAAABAJ', offers: 'Live bets', description: 'A silver card featuring a serene forest landscape.' },
    { id: '8', name: 'Card 8', rarity: 'Bronze', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A bronze card displaying majestic mountain peaks.' },
    { id: '9', name: 'Card 9', rarity: 'Rare', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A rare card with a stunning desert vista.' },
    { id: '10', name: 'Card 10', rarity: 'Legendary', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A legendary card portraying a beautiful galaxy.' },
    { id: '11', name: 'Card 11', rarity: 'Common', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A common card showing a tranquil river scene.' },
    { id: '12', name: 'Card 12', rarity: 'Rare', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A rare card capturing a mesmerizing sunset.' },
    { id: '13', name: 'Card 13', rarity: 'Rare', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A rare card featuring exotic wildlife.' },
    { id: '14', name: 'Card 14', rarity: 'Common', image: 'https://mrwallpaper.com/images/hd/enjoy-the-highest-quality-visuals-with-4k-uhd-0r0mvgzmz17x0gis.jpg', offers: 'Live bets', description: 'A common card with a beautiful array of flowers.' },
  ];
  const handleCardPress = (card) => {
    setSelectedCard(card);
  };
  const handleClose = () => {
    setSelectedCard(null);
  };
  return (
    <ImageBackground  style={styles.backgroundImage} className="bg-gray-950">
      <View style={styles.trendingSection}>
        <Text style={styles.trendingText}>Top Trending</Text>
      </View>
      <View style={styles.container}>
        <FlatList data={trendingCards} keyExtractor={item => item.id} renderItem={({ item }) => <Card card={item} onToggleOffers={() => handleCardPress(item)} show={false} />} />
      </View>
      {selectedCard && ( <Modal visible={true} transparent={true} animationType="slide">
          <AdditionalCards card={selectedCard} onClose={handleClose} />
        </Modal>
      )}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  trendingSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  trendingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default GlobalTradeScreen;
