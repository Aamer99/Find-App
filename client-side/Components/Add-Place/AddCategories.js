import React, { memo, useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Button, Dialog } from "react-native-elements";

function AddCategories(props) {
  const [Categories, setCategories] = useState([]);

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
  const addCategories = (categories) => {
    const newCategory = { Categories: categories };
    if (Categories.length != 0) {
      Categories.pop();
      Categories.push(newCategory);
      const newCategories = [...Categories];
      setCategories(newCategories);
    } else {
      Categories.push(newCategory);
      const newCategories = [...Categories];
      setCategories(newCategories);
    }
  };

  return (
    <Dialog isVisible={props.Visible}>
      <Dialog.Title
        title="Add Categories"
        titleStyle={{ textAlign: "center" }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Icons.map((item, index) => {
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
                backgroundColor: Categories.find((Item) => {
                  if (Item.Categories == item.name) {
                    return true;
                  }
                  return false;
                })
                  ? "#ddd"
                  : "white",
              }}
              key={index}
              onPress={() => {
                addCategories(item.name);
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
        title="Add Categories"
        onPress={() => {
          props.setShowAddCategories(false);
          const categories = [...Categories];
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
        title="Cancel"
        onPress={() => {
          props.setShowAddCategories(false);
        }}
      />
    </Dialog>
  );
}

export default memo(AddCategories);
