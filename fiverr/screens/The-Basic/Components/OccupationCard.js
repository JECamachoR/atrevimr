import React, { useState } from "react";
import { StyleSheet, View,Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-picker/picker";

export default function OccupationCard({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
      >
        <Picker.Item label="Occupation" value="Occupation" />
        <Picker.Item label="Programmer" value="Programmer" />
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
