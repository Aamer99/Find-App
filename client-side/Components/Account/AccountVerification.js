import React, { memo, useState } from "react";
import { Dialog, Input, Button } from "react-native-elements";
import { View, Text } from "react-native";

function AccountVerification(props) {
  const [UserOTP, setUserOTP] = useState(null);
  const [errorOTPinput, setErrorOTPinput] = useState(false);
  const checkOTP = () => {
    if (props.otpMessage == UserOTP) {
      props.SetShowEditAccount(true);
      props.setShowAuth(false);
      props.setEnableEditAvatar(true);
    } else {
      setErrorOTPinput(true);
    }
  };
  return (
    <Dialog visible={props.showAuth}>
      <Dialog.Title title="Athenticate" />
      <Text>
        We send you mail to your registered email contains the OTB message
      </Text>
      <Input
        placeholder="OTB "
        leftIcon={{ type: "feather", name: "key", size: 20 }}
        onChangeText={setUserOTP}
        errorMessage={errorOTPinput ? "invalid OTP " : ""}
        errorStyle={{ margin: 10, fontSize: 12, fontWeight: "600" }}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "80%",
          alignSelf: "center",
        }}
      >
        <Button
          title="Submit "
          buttonStyle={{ backgroundColor: "green" }}
          onPress={checkOTP}
        />
        <Button
          title="Cancel"
          onPress={() => {
            props.setShowAuth(false);
          }}
          buttonStyle={{ backgroundColor: "red" }}
        />
      </View>
    </Dialog>
  );
}

export default memo(AccountVerification);
