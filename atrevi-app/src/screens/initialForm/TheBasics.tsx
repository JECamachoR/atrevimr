import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import DatePicker from "../../components/initialForm/DatePicker";
import GenderCard from "../../components/initialForm/GenderCard";
import OccupationCard from "../../components/initialForm/OccupationCard";
import Waves from "../../components/initialForm/Waves";
import { StackScreenProps } from "@react-navigation/stack";
import { InitialFormParamList } from "../../../types";
import InitialFormContext from "../../contexts/InitialFormContext";
import { grayscale, secondary } from "../../constants/Colors";

type Props = StackScreenProps<InitialFormParamList, "TheBasics">

export default function TheBasic({ navigation }: Props) {

    const [birthDay, setBirthDay] = React.useState<number>(1)    
    const [birthMonth, setBirthMonth] = React.useState<number>(1)
    const [birthYear, setBirthYear] = React.useState<number>(2021)    

    const v = React.useContext(InitialFormContext)

    function _calculateAge(birthday: Date) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    React.useEffect(() => {
        const isoDate = "" + birthYear + 
        "-" + ("0"+birthMonth).slice(-2) + 
        "-" + ("0"+birthDay).slice(-2)
        const birthdate = new Date(isoDate)
        v.setFieldValue(
            "birthdate",
            isoDate
        )
        v.setFieldValue("age", _calculateAge(birthdate))
    }, [birthDay, birthMonth, birthYear])

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
        <DatePicker title="Day" flex={0.8} type="day" value={birthDay} onSelect={setBirthDay} />
        <DatePicker title="Month" flex={1} type="month" value={birthMonth} onSelect={setBirthMonth} />
        <DatePicker title="Year" flex={1} type="year" value={birthYear} onSelect={setBirthYear} />
      </View>
      {/* BirthCards */}
      {/* GenderHeading */}
      <View style={styles.GenderHeading}>
        <Text style={{ fontSize: rf(20), fontWeight: "700" }}>Gender</Text>
      </View>
      {/* GenderHeading */}
      {/* GenderCrads */}
      <View style={styles.GenderCards}>
        <GenderCard value={v.values.gender} setValue={(g) => {
            v.setFieldValue("gender", g)
        }} />
      </View>
      {/* GenderCards */}
      {/* occupationHeading */}
      <View style={styles.OccupationHeading}>
        <Text style={{ fontSize: rf(20), fontWeight: "700" }}>Occupation</Text>
      </View>
      {/* OccupationHeading */}
      {/* OccupationCard */}
      <View style={styles.OccupationCard}>
        <OccupationCard value={v.values.ocupation} setValue={(o) => {
            v.setFieldValue("ocupation", o)
        }} />
      </View>
      {/* OccupationCard */}
      {/* Buttons */}
      <View style={styles.BtnRow}>
        <TouchableOpacity
          style={[
              styles.btn,
              {

                  backgroundColor: (!v.values.ocupation || !v.values.gender || !v.values.age) ? "#EFF0F6" : secondary.default
              }
            ]}
          onPress={() => {
              if (!v.values.ocupation || !v.values.gender || !v.values.age) return
              
            navigation.navigate("Spending")
          }}
        >
          <Text style={{ 
              fontSize: rf(16), 
              color: (!v.values.ocupation || !v.values.gender || !v.values.age) ? 
              "grey" : grayscale.offWhite
            }}>Next</Text>
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
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
