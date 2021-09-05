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

type Props = {
    selected: string | undefined;
    type: string;
    onPress: () => void;
    title: string
}

export default function SavingCard(props: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <View
        style={[
          styles.frequencyTypeRadio,
          {
            backgroundColor: props.selected == props.type ? "#fff" : "#D9DBE9",
            borderWidth: props.selected == props.type ? 7 : 0,
          },
        ]}
      ></View>
      <Text style={{ fontSize: rf(12.62), color: "#3F51B5" }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    height: hp("7%"),
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
