import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TextInput, View } from "react-native";
export default function TxtInputComponent({ navigation, InputText }) {
  return (
    <View style={styles.TxtInputBody}>
      <TextInput
        style={{ width: "100%", height: "100%" }}
        placeholder={InputText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TxtInputBody: {
    height: hp("6%"),
    width: wp("90%"),
    backgroundColor: "#EFF0F6",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#D9DBE9",
    paddingHorizontal: "5%",
  },
});
