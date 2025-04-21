import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { BASE_URL } from '../constants';

const Login = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    if (emailOrPhone.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/users/login`, {
        emailOrPhone,
        password,
      });

      if (res.data?.token) {
        alert('Login Successful!');
        // Redirect to HomeScreen after successful login
        router.replace('/HomeScreen');
      } else {
        alert('Login failed!');
      }
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <View className="bg-pink-200 w-screen h-screen justify-center items-center">
      <Image 
        source={require('../assets/images/logo.png')} 
        className="w-72 h-72"
      />
      <Text className="text-pink-800 text-3xl font-semibold mt-0 mb-3">Welcome Back!</Text>
      
      <TextInput 
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-6"
        placeholder="Enter Email or Phone"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
        keyboardType="default"
      />

      <TextInput 
        className="w-80 bg-white p-4 rounded-2xl mb-4 border border-gray-300 mt-1"
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="w-64 bg-pink-700 p-4 rounded-3xl mt-10" onPress={handleLogin}>
        <Text className="text-white font-bold text-2xl text-center">Login</Text>
      </TouchableOpacity>

      <Text className="text-pink-700 font-semibold mt-2">
        Don't have an account? <Text onPress={() => router.push('/signup')} className="underline">Signup</Text>
      </Text>
    </View>
  );
};

export default Login;
