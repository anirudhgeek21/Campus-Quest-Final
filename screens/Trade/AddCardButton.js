import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AddCardButton = () => {
  const handlePress = () => {
    console.log('Pressed');

  };

  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>Add a new Card to Trade</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    marginTop: 2,
  },
});

export default AddCardButton;
