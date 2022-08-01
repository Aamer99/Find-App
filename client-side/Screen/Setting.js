import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, AsyncStorage } from "react-native";
import { Icon, Dialog } from "react-native-elements";
import RNPickerSelect from "react-native-picker-select";
import Feather from "react-native-vector-icons/Feather";
import { CheckBox } from "@rneui/themed";
export default function Setting({ navigation }) {
  const [cities, setCities] = useState([{ label: "Madina", value: "Madina" }]);
  const [city, setCity] = useState("");
  const [showLanguage, setShowLanguage] = useState(false);
  const selectPlaceholder = { label: "City", value: null, color: "#9EA0A4" };
  async function checkToken() {
    try {
      const token = await AsyncStorage.getItem("token");
      const tokeninfo = {
        token: token,
      };
      alert(token);
    } catch (err) {
      alert(err.messages);
    }
  }
  checkToken();
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        top: 30,
        margin: 30,
      }}
    >
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "black",
          width: "100%",
          height: 50,
          margin: 10,
        }}
      >
        <Pressable
          onPress={() => {
            setShowLanguage(true);
          }}
          style={{ height: 100 }}
        >
          <Text style={{ margin: 10 }}>
            <Icon
              type="feather"
              name="globe"
              size={20}
              style={{ marginRight: 10, marginTop: 10 }}
            />
            Language
          </Text>
        </Pressable>
      </View>
      <RNPickerSelect
        onValueChange={setCity}
        items={cities}
        value={city}
        style={pickerSelectStyles}
        placeholder={selectPlaceholder}
        Icon={() => {
          return <Feather name="map-pin" size={22} />;
        }}
      />
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "black",
          width: "100%",
          height: 50,
          margin: 10,
        }}
      >
        <Pressable
          onPress={() => {
            alert("clicked on language");
          }}
        >
          <Text style={{ margin: 10 }}>
            <Icon
              type="material"
              name="feedback"
              size={20}
              style={{ marginRight: 10, marginTop: 10 }}
            />
            Feedback
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "black",
          width: "100%",
          height: 50,
          margin: 10,
        }}
      >
        <Pressable
          onPress={() => {
            alert("clicked on language");
          }}
        >
          <Text style={{ margin: 10 }}>
            <Icon
              type="feather"
              name="send"
              size={20}
              style={{ marginRight: 10, marginTop: 10 }}
            />
            Contact us
          </Text>
        </Pressable>
      </View>

      {showLanguage && (
        <Language
          Visible={true}
          AccountLanguage={1}
          setShowLanguage={setShowLanguage}
        />
      )}

      <View
        style={{
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "90%",
        }}
      >
        <Text>V 1.0</Text>
      </View>
    </View>
  );
}
const Language = (props) => {
  const [checked, setChecked] = useState(1);

  function setLanguage() {
    alert(checked);
  }
  return (
    <View>
      <Dialog isVisible={props.Visible}>
        <Dialog.Title title="Language" titleStyle={{ textAlign: "center" }} />

        {["English", "Arabic"].map((l, i) => (
          <CheckBox
            key={i}
            title={l}
            containerStyle={{ backgroundColor: "white", borderWidth: 0 }}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checked === i + 1}
            onPress={() => setChecked(i + 1)}
          />
        ))}
        <Dialog.Actions>
          <Dialog.Button title="CONFIRM" onPress={setLanguage} />
          <Dialog.Button
            title="CANCEL"
            onPress={() => {
              props.setShowLanguage(false);
            }}
          />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,

    color: "black",
    paddingLeft: 40,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    margin: 10,
    width: "100%",
  },
  iconContainer: {
    top: 15,
    left: 15,
  },
});
