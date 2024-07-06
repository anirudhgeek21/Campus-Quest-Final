import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Card from '../Card/Card.js';


const YourTradeScreen = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const cards = [
    { id: '1', name: 'Card 1', rarity: 'Rare', image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '2', name: 'Card 2', rarity: 'Gold', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonwGvuKs445abYnxm4oo9J015eXILj86-yg&s', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '3', name: 'Card 3', rarity: 'Bronze', image: 'https://i.pinimg.com/originals/4c/cd/77/4ccd7728e457aa33ae9777c3dff28988.jpg', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '4', name: 'Card 4', rarity: 'Silver', image: 'https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg', offers: 'Offers',description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '5', name: 'Card 5', rarity: 'Rare', image: 'https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '6', name: 'Card 6', rarity: 'Rare', image: 'https://t3.ftcdn.net/jpg/06/27/76/22/360_F_627762270_E4EcttwWBisuK1xkECmdsdlVVz31ikv0.jpg', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '7', name: 'Card 7', rarity: 'Rare', image: 'https://img.freepik.com/premium-photo/generative-ai-80s-retro-futuristic-scifi-nostalgic-90s-night-sunset-neon-colors-cyberpunk_93150-9324.jpg', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '8', name: 'Card 8', rarity: 'Rare', image: 'https://via.placeholder.com/50', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '9', name: 'Card 9', rarity: 'Rare', image: 'https://via.placeholder.com/50', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'},
    { id: '10', name: 'Card 10', rarity: 'Rare', image: 'https://via.placeholder.com/50', offers: 'Offers' ,description:'This is a rare card lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam'}
  ];

  const toggleOffers = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <ImageBackground style={styles.backgroundImage} >
      <View style={styles.container} className="bg-gray-950">
        <FlatList  data={cards}  keyExtractor={item => item.id} renderItem={({ item }) => (
            <Card  card={item}   onToggleOffers={() => toggleOffers(item.id)}   showOffers={expandedCardId === item.id}  show={true}  />  )}  />
      </View>
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
    backgroundColor: '#030712',
  },
});

export default YourTradeScreen;
