import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../Screen/Home";
import Acoount from "../Screen/Acoount";
import Favorite from "../Screen/Favorite";
import Setting from "../Screen/Setting";
import AddLoaction from "../Screen/AddLocation";
const Tap = createMaterialBottomTabNavigator();

// const Drawer = createDrawerNavigator();

export default function TapBar({ route, navigation }) {
  const email = route.params.userEmail;
  const userCity = route.params.userCity;

  return (
    <Tap.Navigator
      screenOptions={{ tabBarLabel: false }}
      barStyle={{
        backgroundColor: "#eee",
        position: "absolute",
        bottom: 40,
        marginHorizontal: 20,
        height: 90,
        borderWidth: 0.5,
        borderBottomWidth: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomStartRadius: 30,
        borderBottomEndRadius: 30,
        borderColor: "transparent",
        overflow: "hidden",
      }}
    >
      <Tap.Screen
        name="Home"
        component={Home}
        initialParams={{ userCity: userCity }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
                width: 40,
              }}
            >
              <Ionicons
                name={focused ? "ios-home-sharp" : "ios-home-outline"}
                color={"black"}
                size={25}
              />
              <Text style={{ top: 10 }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tap.Screen
        name="Favorite"
        component={Favorite}
        initialParams={{ userEmail: email }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 50,
              }}
            >
              <Ionicons
                name={focused ? "ios-heart" : "heart-outline"}
                size={25}
              />
              <Text style={{ top: 10 }}>Favorite</Text>
            </View>
          ),
        }}
      />
      <Tap.Screen
        name="AddLoaction"
        component={AddLoaction}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                width: 60,
                height: 60,
              }}
            >
              <Ionicons
                name={focused ? "add-circle-outline" : "add-circle-sharp"}
                size={60}
              />
            </View>
          ),
        }}
      />
      <Tap.Screen
        name="Account"
        component={Acoount}
        initialParams={{ userEmail: email }}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 60,
              }}
            >
              <Ionicons
                name={focused ? "ios-person" : "ios-person-outline"}
                size={25}
              />
              <Text style={{ top: 10 }}>Account</Text>
            </View>
          ),
        }}
      />

      <Tap.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                top: 10,
                width: 60,
              }}
            >
              <Ionicons
                name={focused ? "ios-settings-sharp" : "ios-settings-outline"}
                size={25}
              />
              <Text style={{ top: 10 }}>Setting</Text>
            </View>
          ),
        }}
      />
    </Tap.Navigator>
  );
}
