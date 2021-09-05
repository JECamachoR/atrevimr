import React, { useState } from "react";
import { StyleSheet, Text, View,  Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-picker/picker";

type Props = {
  value: string | undefined,
  setValue: (v: string | undefined) => void
}

export default function GenderCard({ value, setValue }: Props) {

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => setValue(itemValue)}
      >
        <Picker.Item label="Gender" value={undefined} />
        <Picker.Item label="Male" value="Male" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("8%"),
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e5e5e5",
    overflow:Platform.OS=="ios"? "hidden":"visible",
  },
});
