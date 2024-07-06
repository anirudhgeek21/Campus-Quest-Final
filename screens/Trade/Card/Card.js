import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

//This component utilizes both YourTradeScreen.js and GlobalTradeScreen.js to display the cards in both Global and Your Trade screens.
//For Your Trade Screen i have not made additional card component like globalTrade screen but have done that additional card component of yourtradescreen in this component only
//i have not yet used show props which is used to differentiate for certain functionalities between global and your trade screen

const Card = ({ card, onToggleOffers, showOffers, show }) => {
  const [isImagePopupVisible, setImagePopupVisible] = useState(false);
  const [popupCard, setPopupCard] = useState(null);
  const additionalCards = [
    { id: `${card.id}-1`, name: 'Additional Card 1', rarity: 'Rare', image: 'https://via.placeholder.com/50', description: 'This is the description for Additional Card 1.' },
    { id: `${card.id}-2`, name: 'Additional Card 2', rarity: 'Rare', image: 'https://via.placeholder.com/50', description: 'This is the description for Additional Card 1.' },
    { id: `${card.id}-3`, name: 'Additional Card 3', rarity: 'Rare', image: 'https://via.placeholder.com/50', description: 'This is the description for Additional Card 1.' },
  ];
  const toggleImagePopup = (card) => {
    setPopupCard(card);
    setImagePopupVisible(!isImagePopupVisible);
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={onToggleOffers}>
        <View style={styles.card} className="display-flex flex-row justify-between mx-2 h-28">
          <View style={styles.imageContainer}>
            <TouchableOpacity onPress={() => toggleImagePopup(card)}>
              <Image source={{ uri: card.image }} className="h-20 w-20 rounded-md" />
            </TouchableOpacity>
            <View style={styles.rarityContainer}>
              <Text style={styles.cardRarity} className="rotate-90"> {card.rarity} </Text>
            </View>
          </View>

          <View style={styles.cardText} className="display-flex flex-col">
            <Text style={styles.cardName} className="text-center text-lg">{card.name}</Text>
           
              <TouchableOpacity onPress={onToggleOffers} className="display flex flex-row">
                <Text style={styles.cardOffers}>{card.offers}</Text>
                <Ionicons name="arrow-down-circle" size={24} color="white" style={styles.arrow} />
              </TouchableOpacity>
           
          </View>
        </View>
      </TouchableOpacity>
      {showOffers && (
        <View style={styles.additionalCards}>
          {additionalCards.map((additionalCard) => (
            <View key={additionalCard.id} style={styles.additional} className="display-flex flex-row justify-between mx-2 h-28">
              <View className="display flex flex-row">
                <View style={styles.image}>
                  <TouchableOpacity onPress={() => toggleImagePopup(additionalCard)}>
                    <Image source={{ uri: additionalCard.image }} className="w-20 h-20 rounded-lg" />
                  </TouchableOpacity>
                </View>
                <View className="rotate-90">
                  <Text style={styles.cardRarity} className="text-md">
                    {additionalCard.rarity}
                  </Text>
                </View>
              </View>
              <View style={styles.cardText} className="display-flex flex-col">
                <Text style={styles.cardName} className="text-center text-lg">{additionalCard.name}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      <Modal animationType="fade" transparent={true} visible={isImagePopupVisible} onRequestClose={() => setImagePopupVisible(false)}>
        <TouchableWithoutFeedback onPress={() => setImagePopupVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Image source={{ uri: popupCard?.image }} style={styles.popupImage} />
              <View style={styles.modalDetails}>
                <Text style={styles.modalCardName} className="text-2xl">{popupCard?.name}</Text>
                <Text style={styles.modalCardRarity}>{popupCard?.rarity}</Text>
                <Text style={styles.modalCardDescription} className="text-md md:text-lg">{popupCard?.description}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    display: 'flex',
    backgroundColor: '#9747FF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rarityContainer: {
    position: 'absolute',
    right: -30,
    top: 6,
  },
  cardRarity: {
    color: '#FFCD29',
    fontWeight: 'bold',
  },
  cardName: {
    color: '#E6E6E6',
    fontWeight: '500',
  },
  cardOffers: {
    color: '#E6E6E6',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 5,
    fontWeight: 'bold',
  },
  arrow: {
    marginLeft: 5,
    marginTop: 8,
  },
  additionalCards: {
    marginTop: 10,
  },
  additional: {
    display: 'flex',
    backgroundColor: '#353537',
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: '6%',
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: 'auto',
    width: '80%',
    height: '50%',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  popupImage: {
    marginTop: '3%',
    width: '80%',
    height: '50%',
    borderRadius: 10,
  },
  modalDetails: {
    marginTop: 15,
    alignItems: 'center',
  },
  modalCardName: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    color: 'white',
  },
  modalCardRarity: {
    fontSize: 16,
    color: '#FFCD29',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalCardDescription: {
    fontWeight: 'light',
    color: 'white',
    textAlign: 'center',
  },
});

export default Card;
