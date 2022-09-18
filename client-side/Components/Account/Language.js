import React, { useState } from "react";
import { View, Text } from "react-native";
import { Dialog, Icon } from "react-native-elements";
import { CheckBox } from "@rneui/themed";

export default function Language(props) {
  const [checked, setChecked] = useState(false);

  function setLanguage() {
    alert(checked);
  }
  return (
    <View>
      <Dialog isVisible={props.Visible}>
        <Dialog.Title title="Language" titleStyle={{ textAlign: "center" }} />

        {["Option 1", "Option 2", "Option 3"].map((l, i) => (
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
}
