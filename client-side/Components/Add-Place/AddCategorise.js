import React, { memo, useState } from "react";
import {
  View,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button, Dialog } from "react-native-elements";
//const selectedCategories = [];

function AddCategorise(props) {
  const [Categorise, setCategories] = useState([]);
  const [checked, setChecked] = useState("");
  const Icons = [
    { Image: require("../../assets/pizza.png"), name: "Pizza" },
    { Image: require("../../assets/burger.png"), name: "Fast Food" },
    { Image: require("../../assets/rice.png"), name: "Rice" },
    { Image: require("../../assets/meat.png"), name: "Meat" },
    { Image: require("../../assets/pasta.png"), name: "Pasta" },
    { Image: require("../../assets/ramen.png"), name: "Chinese Food" },
    { Image: require("../../assets/chicken.png"), name: "Chicken" },
    { Image: require("../../assets/french-fries.png"), name: "Fries" },
    { Image: require("../../assets/sandwich.png"), name: "Sandwich" },
  ];
  const addCategorise = (categories) => {
    let i = 0;
    do {
      if (
        Categorise.find((item) => {
          return item == categories;
        })
      ) {
        Categorise.splice(i, 1);

        const newCategorise = [...Categorise];
        setCategories(newCategorise);
      } else {
        Categorise.push(categories);
        const newCategorise = [...Categorise];
        setCategories(newCategorise);
      }
    } while (i >= Categorise.length);

    alert(JSON.stringify(Categorise));
  };

  return (
    <Dialog isVisible={props.Visible}>
      <Dialog.Title
        title="Add Categorise"
        titleStyle={{ textAlign: "center" }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Icons.map((item) => {
          return (
            <TouchableOpacity
              id="ss"
              style={{
                borderColor: "black",
                borderRadius: 20,
                borderWidth: 0.5,
                maxWidth: "30%",
                margin: 10,
                flexDirection: "row",
                //backgroundColor: checked == item.name ? "#ddd" : "",
                backgroundColor: Categorise.find((Item) => {
                  return Item == item.name;
                })
                  ? "#ddd"
                  : "",
              }}
              onPress={() => {
                addCategorise(item.name);
              }}
            >
              <Image
                source={item.Image}
                style={{
                  width: 50,
                  height: 40,
                  resizeMode: "contain",
                  margin: 20,
                  alignItems: "center",
                  alignSelf: "center",
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <Button
        buttonStyle={{
          width: "90%",
          borderRadius: 35,
          borderWidth: 0.2,
          alignSelf: "center",
          margin: 5,
        }}
        title="Add Categorise"
        onPress={() => {
          props.setShowAddCategorise(false);
          const categories = [...Categorise];
          props.setCategories(categories);
        }}
      />
      <Button
        buttonStyle={{
          width: "90%",
          borderRadius: 35,
          borderWidth: 0.2,
          alignSelf: "center",
          margin: 5,
          backgroundColor: "red",
        }}
        title="Cansel"
        onPress={() => {
          props.setShowAddCategorise(false);
        }}
      />
    </Dialog>
  );
}

export default memo(AddCategorise);
