import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Profile({ navigation, EditProfile }) {
  return (
    <View style={styles.ProfilePicWrapper}>
      <TouchableOpacity style={styles.ProfilePicBody}>
        <Image
          style={{ height: "100%", width: "100%" }}
          source={require("../../../assets/ProfilePic.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.ProfileName}>
        <Text style={{ fontSize: rf(11), color: "#A0A3BD" }}>
          {EditProfile}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ProfilePicWrapper: {
    height: hp("23%"),
    width: wp("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  ProfilePicBody: {
    height: hp("15%"),
    width: hp("15%"),
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ProfileName: {
    height: "14%",
    justifyContent: "center",
  },
});
