import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ComponentInfo from "./ComponentInfo";

export default function PlaceContainer(props) {
  return (
    <View>
      {props.places.map((item, count) => {
        return (
          <ComponentInfo
            logo={item.logo}
            name={item.name}
            navigation={props.navigation}
            id={item.id}
            mnue={item.mnue}
            location={item.PlaceLocation}
            FavoritPlace={false}
            key={count}
          />
        );
      })}
    </View>
  );
}