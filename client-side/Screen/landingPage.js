import { View, Animated, Image } from "react-native";
import React, { useEffect, useRef } from "react";
import Logo from "../assets/Find-logos/logos_black.png";
export default function LandingPage({ navigation }) {
  setTimeout(() => {
    navigation.replace("Login");
  }, 2600);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#E2E2E2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FadeInView>
        <Image source={Logo} style={{ height: 300, width: 300 }} />
      </FadeInView>
    </View>
  );
}

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
