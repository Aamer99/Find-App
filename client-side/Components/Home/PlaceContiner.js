import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import ComponentInfo from "./ComponentInfo";

export default function PlaceContainer(props) {
  return (
    <View>
      {props.places.map((item) => {
        return (
          <ComponentInfo
            logo={item.logo}
            name={item.name}
            navigation={props.navigation}
            id={item.id}
            mnue={item.mnue}
            location={item.location}
            FavoritPlace={false}
          />
        );
      })}
    </View>
  );
}
