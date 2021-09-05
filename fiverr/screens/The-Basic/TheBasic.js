import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import DatePicker from "./Components/DatePicker";
import GenderCard from "./Components/GenderCard";
import OccupationCard from "./Components/OccupationCard";
import Waves from "./Components/Waves";

export default function TheBasic({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.Header}>
        <Text style={{ fontSize: rf(20), fontWeight: "700", marginBottom: 3 }}>
          First, the basics
        </Text>
        <Text style={{ fontSize: rf(14) }}>
          Lorem ipsum dolor amet qu sonte,
        </Text>
      </View>
      {/* Header */}
      {/* BirthHeading */}
      <View style={styles.BirthHeading}>
        <Text style={{ fontSize: rf(20), fontWeight: "700" }}>Birthdate</Text>
      </View>
      {/* BirthHeading */}
      {/* BirthCards */}
      <View style={styles.BirthCards}>
        <DatePicker title="Day" flex={0.8} type="day" />
        <DatePicker title="Month" flex={1} type="month" />
        <DatePicker title="Year" flex={1} type="year" />
      </View>
      {/* BirthCards */}
      {/* GenderHeading */}
      <View style={styles.GenderHeading}>
        <Text style={{ fontSize: rf(20), fontWeight: "700" }}>Gender</Text>
      </View>
      {/* GenderHeading */}
      {/* GenderCrads */}
      <View style={styles.GenderCards}>
        <GenderCard />
      </View>
      {/* GenderCards */}
      {/* occupationHeading */}
      <View style={styles.OccupationHeading}>
        <Text style={{ fontSize: rf(20), fontWeight: "700" }}>Occupation</Text>
      </View>
      {/* OccupationHeading */}
      {/* OccupationCard */}
      <View style={styles.OccupationCard}>
        <OccupationCard />
      </View>
      {/* OccupationCard */}
      {/* Buttons */}
      <View style={styles.BtnRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("AlphaWelcome2")}
        >
          <Text style={{ fontSize: rf(16), color: "grey" }}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* Buttons */}

      <View>
        <Waves />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  Header: {
    width: wp("90%"),
    height: hp("16%"),
    justifyContent: "flex-end",
  },
  BirthHeading: {
    width: wp("90%"),
    height: hp("10%"),
    justifyContent: "center",
  },
  BirthCards: {
    width: wp("90%"),
    height: hp("10%"),
    flexDirection: "row",
    justifyContent: "space-around",
  },
  GenderHeading: {
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
  },
  GenderCards: {
    width: wp("90%"),
    height: hp("10%"),
  },
  OccupationHeading: {
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
  },
  OccupationCard: {
    width: wp("90%"),
    height: hp("10%"),
  },
  BtnRow: {
    width: wp("90%"),
    height: hp("10%"),
    justifyContent: "center",
  },
  btn: {
    width: "30%",
    height: "55%",
    backgroundColor: "#EFF0F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
