import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";

export default function SavingCard(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.frequencyTypeRadio,
          {
            backgroundColor: props.selected == props.type ? "#fff" : "#D9DBE9",
            borderWidth: props.selected == props.type ? 7 : 0,
          },
        ]}
        onPress={props.onPress}
      ></TouchableOpacity>
      <Text style={{ fontSize: rf(12.62), color: "#3F51B5" }}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "center",
    borderRadius: 13,
    backgroundColor: "#fff",
    paddingHorizontal: "3%",
    marginBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  frequencyTypeRadio: {
    width: wp("6%"),
    height: wp("6%"),
    borderRadius: 100,
    backgroundColor: "#fff",
    borderWidth: 7,
    borderColor: "#3F51B5",
    marginHorizontal: "3%",
  },
});
