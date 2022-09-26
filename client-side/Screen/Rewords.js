import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
import { Divider, Icon, LinearProgress } from "react-native-elements";

function Rewards() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#eee",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: 30,
        }}
      >
        <Image
          source={require("../assets/rewards-Icon.png")}
          style={{ width: 80, height: 80, margin: 5 }}
        />
        <Text style={{ fontSize: 70, fontWeight: "500" }}>200</Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            backgroundColor: "#E8E8E8",
            borderRadius: 20,
            width: 350,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              width: 200,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
              }}
            >
              <Image
                source={require("../assets/rewards-Icon.png")}
                style={{ width: 30, height: 30, margin: 5 }}
              />
              <Text style={{ fontSize: 19, fontWeight: "500" }}>
                Discound 20%
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
              }}
            >
              <Icon name="access-time" size={20} style={{ margin: 2 }} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "250",
                }}
              >
                1.5h
              </Text>
            </View>
          </View>
          <View>
            <Button title="Get Reward" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            backgroundColor: "#E8E8E8",
            borderRadius: 20,
            width: 350,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              justifyContent: "space-evenly",
              width: 200,
              padding: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
              }}
            >
              <Image
                source={require("../assets/rewards-Icon.png")}
                style={{ width: 30, height: 30, margin: 5 }}
              />
              <Text style={{ fontSize: 19, fontWeight: "500" }}>
                Discound 20%
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 15,
              }}
            >
              <Icon name="access-time" size={20} style={{ margin: 2 }} />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "250",
                }}
              >
                1.5h
              </Text>
            </View>
          </View>
          <View>
            <Button title="Get Reward" />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          backgroundColor: "#D1D1D1",
          borderRadius: 20,
          width: "80%",
          height: 180,
          margin: 30,
          // justifyContent: "center",
          // alignItems: "center",
          marginBottom: 150,
        }}
      >
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text style={{ fontWeight: "800" }}>Places support the rewards:</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={require("../assets/places/1663949510464.png")}
            style={{ width: 100, height: 100, margin: 25 }}
          />
          <Image
            source={require("../assets/places/Burger_King_1994_logo.svg.png")}
            style={{ width: 100, height: 100, margin: 25 }}
          />
          <Image
            source={require("../assets/places/hardees-logo.png")}
            style={{ width: 100, height: 100, margin: 25 }}
          />
          <Image
            source={require("../assets/pizza-hut-logo.png")}
            style={{ width: 100, height: 100, margin: 25 }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const RewardsBar = (props) => (
  <View style={style.containerBar}>
    <Text
      style={{
        position: "absolute",
        right: 5,
        color: "black",
        fontWeight: "900",
      }}
    >
      {props.value}
    </Text>
    <View
      style={{ width: props.value, height: "100%", backgroundColor: "#5C5C5C" }}
    ></View>
  </View>
);

const style = StyleSheet.create({
  containerBar: {
    position: "relative",
    width: "80%",
    height: 50,
    backgroundColor: "#D1D1D1",
    borderRadius: 5,
    overflow: "hidden",
    justifyContent: "center",
  },
});
export default memo(Rewards);
