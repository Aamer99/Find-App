import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  BaseNavigationContainer,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./Screen/Home";
import RestaurantDetail from "./Screen/RestaurantDetail";
import Acoount from "./Screen/Acoount";
import Favorite from "./Screen/Favorite";
import Login from "./Components/Account/Login";
import Signup from "./Components/Account/Signup";

export default function RootNavigation() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetail} />
        <Stack.Screen name="Account" component={Acoount} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Singup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
