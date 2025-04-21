import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import axios from 'axios';
import { BASE_URL } from '../constants';

const signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    if (!fullName || !email || !phone || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/users/register`, {
        name: fullName,
        email,
        phone,
        password
      });

      if (res.data?.token) {
        setFullName('');
        setEmail('');
        setPhone('');
        setPassword('');

        // Show message
        alert('Signup successful! Now you can login.');
       
        // Optionally: Save token to AsyncStorage
        // await AsyncStorage.setItem('token', res.data.token);
      } else {
        alert('Signup failed!');
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <View className="bg-pink-200 w-screen h-screen justify-center items-center">
      <Text className="text-pink-600 text-5xl font-extrabold">SAFENAARI</Text>
      <Text className="text-pink-800 text-3xl font-semibold mt-14 mb-5">Create Your Account</Text>

      <TextInput
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-6"
        placeholder="Enter Your Full Name"
        value={fullName}
        onChangeText={setFullName}
        keyboardType="default"
      />

      <TextInput
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-1"
        placeholder="Enter Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-1"
        placeholder="Enter Your Phone no."
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />

      <TextInput
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-1"
        placeholder="Set Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="w-64 bg-pink-700 p-4 rounded-3xl mt-10" onPress={handleSignup}>
        <Text className="text-white font-bold text-2xl text-center">Sign In</Text>
      </TouchableOpacity>

      <Link href="./login" className="text-pink-700 font-semibold mt-5">Already have an account? Login</Link>
      <Link href="./HomeScreen" className="text-pink-700 font-semibold mt-5">Home Page</Link>
      <Link href="./settings" className="text-pink-700 font-semibold mt-5">Settings</Link>
    </View>
  );
};

export default signup;
