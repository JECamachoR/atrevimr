import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
export default function StepIndicator(props) {
  return (
    <View
      style={[
        styles.stepIndicatorWrapper,
        {
          backgroundColor: props.activated ? "#CDEAFE" : "transparent",
        },
      ]}
    >
      <View
        style={[
          styles.stepIndicator,
          {
            width: props.activated ? wp("8%") : wp("3.5%"),
            height: props.activated ? wp("8%") : wp("3.5%"),
            backgroundColor: props.activated ? "#3F51B5" : "#D9DBE9",
          },
        ]}
      >
        {props.completed ? (
          <Image
            source={require("../../../assets/checkmark-circle.png")}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.stepIndicatorText}>
            {props.activated ? props.number : null}
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepIndicator: {
    width: wp("8%"),
    height: wp("8%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stepIndicatorWrapper: {
    width: wp("9.5%"),
    height: wp("9.5%"),
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  stepIndicatorText: {
    fontSize: wp("4.5%"),
    color: "#fff",
  },
});
