import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }}/>
      <Stack.Screen name="editProfile" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="AddFriend" />
      <Stack.Screen name="LiveLocationMap" />
      <Stack.Screen name="FakeCallScreen" />
      


    </Stack>
  );
};

export default RootLayout;
