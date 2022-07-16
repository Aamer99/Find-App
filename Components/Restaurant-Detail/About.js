import { View, Text, Image } from "react-native";
import React from "react";

export default function About() {
  return (
    <View>
      <Img uri="http://cdn.eso.org/images/screen/eso1907a.jpg" />
      <Title title="Aamer Essa" />
      <Description description="AAAAAAAAAa" />
      <Location location="Googel maps " />
    </View>
  );
}

const Img = (props) => {
  return (
    <Image source={{ uri: props.uri }} style={{ width: "100%", height: 180 }} />
  );
};

const Title = (props) => {
  return <Text>{props.title}</Text>;
};
const Description = (props) => {
  return <Text>{props.description}</Text>;
};

const Location = (props) => {
  return <Text>{props.location}</Text>;
};
