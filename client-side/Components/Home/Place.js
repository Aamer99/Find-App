import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { View, Text, ActivityIndicator } from "react-native";
import PlaceContainer from "./PlaceContinuer";
import { Dialog } from "react-native-elements";
import { useQuery } from "react-query";
import ComponentInfo from "./ComponentInfo";
import { TabItem } from "@rneui/base/dist/Tab/Tab.Item";
function Place({ navigation, ...props }) {
  const [data, setData] = useState([]);

  const getPlaces = async () => {
    const places = await axios.post("http://172.20.10.14:4000/place", {
      city: props.userCity,
      type: props.placeType,
    });

    return places;
  };
  const places = useQuery("users", getPlaces);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const places = await axios.post("http://192.168.1.22:4000/place", {
  //         city: props.userCity,
  //         type: props.placeType,
  //       });
  //       if (places.status === 200) {
  //         props.setData(places.data);
  //         setActiveLoading(false);
  //       } else {
  //         alert("err and " + places.status);
  //       }
  //     } catch (error) {
  //       throw error;
  //     }
  //   };
  //   getData();
  // });

  return (
    <View>
      {places.isLoading ? (
        <>
          <ActivityIndicator
            size="large"
            color="gray"
            style={{
              marginTop: "50%",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: 80,
            }}
          />
        </>
      ) : (
        <>
          {/* {!props.showSearch && !props.showByCategories && (
            <PlaceContainer places={places.data} navigation={navigation} />
          )}
          {props.showSearch && !props.showByCategories && (
            <>
              {props.Search.length === 0 && (
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50%",
                  }}
                >
                  <Entypo name="emoji-sad" size={50} color="gray" />
                  <Text style={{ margin: 10, color: "gray" }}>
                    Sorry we can't find what you search for it
                  </Text>
                </View>
              )}
              {props.Search.length != 0 && (
                <PlaceContainer places={props.Search} navigation={navigation} />
              )}
            </>
          )}
          {props.showByCategories && (
            <PlaceContainer places={props.categories} navigation={navigation} />
          )}
        </>
      )} */}
          <View>
            {places.data.data.map((item, count) => (
              <ComponentInfo Place={item} navigation={navigation} />
            ))}
          </View>
        </>
      )}
    </View>
  );
}

export default memo(Place);
