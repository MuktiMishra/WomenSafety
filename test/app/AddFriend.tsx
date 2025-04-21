import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

const AddFriend = () => {
  const [fullName, setFullName] = useState<string>('');
  const [contactNumber, setContactNumber] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [friends, setFriends] = useState<
    { id: string; name: string; contact: string }[]
  >([
    // 🧪 Dummy Data
    { id: '1', name: 'Emma Watson', contact: '9876543210' },
    { id: '2', name: 'Harry Styles', contact: '9988776655' }
  ]);

  const navigation = useNavigation();

  const handleAddFriend = async () => {
    if (!fullName || !contactNumber) {
      Alert.alert('Error', 'Please provide both name and contact number');
      return;
    }

    try {
      setLoading(true);

      // Fake token usage just for demo
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        Alert.alert('Error', 'You must be logged in to add a friend');
        setLoading(false);
        return;
      }

      // TODO: Replace with your actual API request
      const newFriend = {
        id: Date.now().toString(),
        name: fullName,
        contact: contactNumber
      };

      // Simulate adding to API
      setFriends((prev) => [...prev, newFriend]);

      Alert.alert('Success', 'Friend added successfully!');
      setFullName('');
      setContactNumber('');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFriend = (id: string) => {
    Alert.alert('Delete Friend', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setFriends((prev) => prev.filter((f) => f.id !== id));
        }
      }
    ]);
  };

  return (
    <View className="bg-pink-200 w-screen h-screen p-4 pt-14">
      <Text className="text-pink-600 text-4xl font-extrabold text-center">Add a Friend</Text>

      <View className="items-center mt-6">
        <TextInput
          className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300"
          placeholder="Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300"
          placeholder="Enter Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="phone-pad"
        />

        <TouchableOpacity
          className="w-64 bg-pink-700 p-4 rounded-3xl mt-4"
          onPress={handleAddFriend}
          disabled={loading}
        >
          <Text className="text-white font-bold text-2xl text-center">
            {loading ? 'Adding...' : 'Add Friend'}
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-xl font-bold text-pink-700 mt-8 mb-3">Your Friends</Text>

      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-xl mb-3 flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-semibold text-pink-800">{item.name}</Text>
              <Text className="text-gray-600">{item.contact}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeleteFriend(item.id)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default AddFriend;
