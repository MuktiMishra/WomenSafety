import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import "../global.css";
import { Link } from 'expo-router';

const Index = () => {
  return(
    <View>
      <Text className="text-pink-600 text-5xl font-extrabold">SAFENAARI</Text>
      <Link href="./signup" className="text-pink-700 font-semibold mt-5">Settings </Link>
      <Link href="./slider" className="text-pink-700 font-semibold mt-5">slider</Link>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});