import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const editProfile = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Top Profile Section */}
        <View style={styles.header}>
          <Text style={styles.profileName}>Your Name</Text>
          <View style={styles.profileIconContainer}>
            <Ionicons name="person-outline" size={40} color="black" />
          </View>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <FontAwesome name="user" size={20} color="black" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Name" placeholderTextColor="black" />
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome name="phone" size={20} color="black" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Phone no" placeholderTextColor="black" />
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome name="envelope" size={20} color="black" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Email id" placeholderTextColor="black" />
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome name="map-marker" size={20} color="black" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Address" placeholderTextColor="black" />
          </View>
          <View style={styles.inputWrapper}>
            <FontAwesome name="lock" size={20} color="black" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="black"
            />
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8bbd0",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  header: {
    width: "100%",
    backgroundColor: "white",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
    paddingVertical: 40,
  },
  profileName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
  profileIconContainer: {
    backgroundColor: "#f8bbd0",
    padding: 15,
    borderRadius: 50,
    marginTop: 10,
  },
  inputContainer: {
    width: "85%",
    marginTop: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    height: 45,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "black",
    
  },
  editButton: {
    backgroundColor: "#f472b6",
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "black",
  },
  emergencyButtonContainer: {
    position: "absolute",
    bottom: 25,
    left: "43%",
  },
  emergencyButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
    shadowColor: "black",
  },
  emergencyIcon: {
    width: 50,
    height: 50,
  },
});

export default editProfile;
