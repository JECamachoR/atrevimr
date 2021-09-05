import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function Waves() {
  const circles = [1, 2, 3, 4, 5, 6];
  return (
    <View style={styles.container}>
      {circles.map((item, index) => {
        return (
          <View
            key={index}
            style={[
              styles.container,
              {
                width: wp("20%") * item,
                height: wp("20%") * item,
                borderRadius: (wp("20%") * item) / 2,
                backgroundColor: item == 1 ? "#e0e2f1" : "transparent",
                opacity: index < 3 ? 1 : 0.1,
                borderWidth: 1,
              },
            ]}
          ></View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("80%"),
    height: wp("80%"),
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: wp("80%") / 2,
    borderColor:"#3F51B5",
  },
});
