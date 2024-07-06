import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView,Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AdditionalCards = ({ card, onClose }) => {
  const [selectedImage,setSelectedImage]=useState(null);
  const additionalCards = [
    { id: `${card.id}-1`,name:"Nameof Card1", name1: 'Additional Card 1',name2: 'Additional Card 2',name3: 'Additional Card 3', rarity1: 'Rare',rarity2: 'Silver',rarity3: 'Bronze', image1: 'https://via.placeholder.com/50', image2: 'https://via.placeholder.com/50', image3: 'https://via.placeholder.com/50', num1: '3', num2: '5', num3: '7', description1: 'This is the description for Image 1.', description2: 'This is the description for Image 2.', description3: 'This is the description for Image 3.' },
    { id: `${card.id}-2`,name:"Name of Card2", name1: 'Additional Card 2',name2: 'Additional Card 2',name3: 'Additional Card 3',  rarity1: 'Rare',rarity2: 'Silver',rarity3: 'Bronze', image1: 'https://via.placeholder.com/50', image2: 'https://via.placeholder.com/50', image3: 'https://via.placeholder.com/50', num1: '3', num2: '5', num3: '7', description1: 'This is the description for Image 1.', description2: 'This is the description for Image 2.', description3: 'This is the description for Image 3.' },
    { id: `${card.id}-3`,name:"Name of Card3", name1: 'Additional Card 1',name2: 'Additional Card 2',name3: 'Additional Card 3'  ,rarity1: 'Rare',rarity2: 'Silver',rarity3: 'Bronze', image1: 'https://via.placeholder.com/50', image2: 'https://via.placeholder.com/50', image3: 'https://via.placeholder.com/50', num1: '3', num2: '5', num3: '7', description1: 'This is the description for Image 1.', description2: 'This is the description for Image 2.', description3: 'This is the description for Image 3.' },
  ];


  const handleimagePress=(name,image,rarity,description)=>{
    setSelectedImage({name,image, rarity, description });
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { console.log('Pressed') }} style={styles.offerButton}>
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.offerButtonText}>Give Your Offer</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="black" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <FlatList
        data={additionalCards}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card} className="display-flex flex-col">
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.offering}>Offering</Text>
            </View>
            <ScrollView horizontal>
              <View style={styles.offeringContainer}>
              <TouchableOpacity onPress={()=>handleimagePress(item.name1,item.image1,item.rarity1,item.description1)}>
                <Image source={{ uri: item.image1 }} style={styles.image} />
                </TouchableOpacity>
                <Ionicons name="close-circle-outline" size={37} color="white" style={styles.multiply} />
                <Text style={styles.num} className="mr-7">{item.num1} </Text>
                <TouchableOpacity onPress={()=>handleimagePress(item.name2,item.image2,item.rarity2,item.description2)}>
                <Image source={{ uri: item.image2 }} style={styles.image} />
                </TouchableOpacity>
                <Ionicons name="close-circle-outline" size={37} color="white" style={styles.multiply} />
                <Text style={styles.num} className="mr-7">{item.num2}</Text>
                <TouchableOpacity onPress={()=>handleimagePress(item.name3,item.image3,item.rarity3,item.description3)}>
                <Image source={{ uri: item.image3 }} style={styles.image} />
                </TouchableOpacity>
                <Ionicons name="close-circle-outline" size={37} color="white" style={styles.multiply} />
                <Text style={styles.num}>{item.num3}</Text>
              </View>
            </ScrollView>
          </View>

        )}/>
       {selectedImage && (
        <Modal animationType="slide" transparent={true} visible={!!selectedImage} onRequestClose={() => setSelectedImage(null)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedImage.image }} style={styles.modalImage} />
              <Text style={styles.modalname} className="text-2xl">{selectedImage.name}</Text>
              <Text style={styles.modalRarity}>{selectedImage.rarity}</Text>
              <Text style={styles.modalDescription} className="text-md md:text-lg">{selectedImage.description}</Text>
              <TouchableOpacity onPress={() => setSelectedImage(null)} style={styles.closeModalButton}>
                <Text style={styles.closeModalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000cc',
  },
  closeButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ff0000',
    borderRadius: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  offerButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  offerButtonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  card: {
    backgroundColor: '#9747FF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 74,
    height: 74,
    borderRadius: 5,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  offering: {
    color: '#00BFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  offeringContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiply: {
    marginHorizontal: 10,
  },
  num: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
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
  modalname:{
    marginTop:'auto',
  fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    color: 'white',
  },
  modalImage: {
    marginTop: '3%',
    width: '80%',
    height: '50%',
    borderRadius: 10,
  },
  modalRarity: {
    fontSize: 16,
    color: '#FFCD29',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription:{
    fontWeight: 'light',
    color: 'white',
    textAlign: 'center',
  },
  closeModalButton: {
    marginTop:'auto',
    padding: 10,
    backgroundColor: '#ff0000',
    borderRadius: 5,
  },
  closeModalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AdditionalCards;
