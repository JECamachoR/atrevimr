import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, View } from "react-native";
export default function Carousel3({ navigation }) {
  return (
    <>
      <View style={styles.PicWrapper}>
        <View style={styles.PicBody}>
          <Image
            style={{ height: "100%", width: "100%" }}
            source={require("../../assets/Saly3.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.TextWrapper}>
        <Text
          style={{ fontSize: rf(33), fontWeight: "bold", color: "#1A224C" }}
        >
          Easy going
        </Text>
        <Text style={{ fontSize: rf(14),top:5, color: "#1A224C" }}>
          we take care of the math
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC00",
  },

  PicWrapper: {
    height: hp("40%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  PicBody: {
    height: "100%",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  TextWrapper: {
    height: hp("10%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: hp("2%"),
  },
  ProgressBarWrapper: {
    height: hp("6%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  ProgressBarContainer: {
    height: "20%",
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProgressBarBody: {
    height: "100%",
    width: "25%",
    backgroundColor: "#fff",
    borderRadius: 30,
  },
  CreateBtnWrapper: {
    height: hp("12%"),
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
  },
  LoginTxtWrapper: {
    height: hp("5%"),
    width: wp("100%"),
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
