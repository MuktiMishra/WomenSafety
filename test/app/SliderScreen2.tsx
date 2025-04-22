import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SliderScreen2 = () => {
  const navigation = useNavigation(); // Use the useNavigation hook

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Pinka 2- Women's Safety App</Text>
      <Text style={styles.subtitle}>Empowering women with safety tools and resources.</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SliderScreen3')} // Navigate to SliderScreen3
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.skipButton}
        onPress={() => navigation.navigate('HomeScreen')} // Skip and navigate to HomeScreen
      >
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8bbd0', // Pink background
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#880e4f', // Dark pink
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#880e4f',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#ad1457',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  skipButton: {
    padding: 10,
  },
  skipText: {
    color: '#880e4f',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SliderScreen2;
