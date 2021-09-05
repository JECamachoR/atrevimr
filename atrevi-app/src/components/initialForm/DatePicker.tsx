import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import { Picker } from "@react-native-picker/picker";

type Props = {
  type: "day" | "month" | "year",
  title: string,
  flex: number,
  value: number,
  onSelect: (v: number) => void
}

export default function DatePicker({ type, title, flex, value, onSelect }: Props) {
  const [data, setData] = useState<(number)[]>([]);

  var month = [
    "",
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const setDate = () => {
    var arr = [] as (number)[]
    if (type == "day") {
      for (var i = 1; i <= 31; i++) {
        arr.push(i);
      }
      setData(arr);
    } else if (type == "month") {
      for (var i = 1; i <= 11; i++) {
        arr.push(i);
      }
      setData(arr);
    } else if (type == "year") {
      for (var i = 2021; i >= 1910; i--) {
        arr.push(i);
      }
      setData(arr);
    } else {
    }
  };

  useEffect(() => {
    setDate();
  }, []);

  return (
    <View
      style={[
        styles.container,
        { flex: flex, overflow: Platform.OS == "ios" ? "hidden" : "visible" },
      ]}
    >
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) => {
          onSelect(itemValue)
        }}
      >
        {data.map((item, index) => {
          return (
            <Picker.Item
              label={type === "month" ? month[item] : item?.toString()}
              value={type === "year" ? item : index + 1}
              key={index}
            />
          );
        })}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("7%"),
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#e5e5e5",
    marginHorizontal: 4,
  },
});
