import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.btnWrapper,
        { backgroundColor: props.active ? "#3F51B5" : "#EFF0F6" },
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          styles.title,
          {
            color: props.active
              ? "#fff"
              : props.title == "Previous"
              ? "#222"
              : "#A0A3BD",
          },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnWrapper: {
    width: "40%",
    height: hp("6%"),
    borderRadius: 100,
    backgroundColor: "#EFF0F6",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginRight: 10,
  },
  title: {
    fontSize: rf(16),
  },
});
