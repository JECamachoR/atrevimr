import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated
} from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./Button";
import StepIndicator from "./StepIndicator";
export default function StepperFrequency(props) {
  const WeekDay = ({ onPress, type, title }) => {
    return (
      <TouchableOpacity
        style={[
          styles.weekDay,
          {
            backgroundColor:
              props.activeDay == type ? "#3F51B5" : "transparent",
          },
        ]}
        onPress={onPress}
      >
        <Text
          style={[
            styles.weekDayText,
            { color: props.activeDay == type ? "#fff" : "#4E4B66" },
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const FrequencyType = ({ type, title, onPress }) => (
    <View style={styles.frequencyTypeWrapper}>
      <TouchableOpacity
        style={[
          styles.frequencyTypeRadio,
          {
            backgroundColor: props.frequency == type ? "#fff" : "#D9DBE9",
            borderWidth: props.frequency == type ? 7 : 0,
          },
        ]}
        onPress={onPress}
      ></TouchableOpacity>
      <View>
        <Text style={styles.frequencyText}>{title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.stepperViewWrapper}>
      <View style={styles.stepperView}>
        <StepIndicator
          number={2}
          activated={props.position >= 2 ? true : false}
          completed={props.position > 2 ? true : false}
        />
        <Text style={styles.stepTitle}>{props.title}</Text>
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            height: props.position>=2?props.height:null, // Bind opacity to animated value
            opacity:props.position>=2? props.opacity:null,
          },
        ]}
      >
        <View
          style={[
            styles.stepperContent,
            { display: props.position==2 ? "flex" : "none" },
          ]}
        >
          <View style={styles.cont2}>
            <Text
              style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
            >
              <Text style={styles.dowText}>Day of the week</Text>: Aut
              laboriosam quos eius dolorum. Aut ero eligendi quI beatae.
            </Text>
          </View>
          <View style={styles.weekDaysWrapper}>
            <WeekDay
              title="M"
              type="mon"
              onPress={() => props.onWeekDayPress("mon")}
            />
            <WeekDay
              title="T"
              type="tue"
              onPress={() => props.onWeekDayPress("tue")}
            />
            <WeekDay
              title="W"
              type="wed"
              onPress={() => props.onWeekDayPress("wed")}
            />
            <WeekDay
              title="T"
              type="thu"
              onPress={() => props.onWeekDayPress("thu")}
            />
            <WeekDay
              title="F"
              type="fri"
              onPress={() => props.onWeekDayPress("fri")}
            />
            <WeekDay
              title="S"
              type="sat"
              onPress={() => props.onWeekDayPress("sat")}
            />
            <WeekDay
              title="S"
              type="sun"
              onPress={() => props.onWeekDayPress("sun")}
            />
          </View>
          <View style={styles.cont2}>
            <Text
              style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
            >
              <Text style={styles.dowText}>Frequency</Text>: Aut laboriosam quos
              eius dolorum. Aut ero eligendi quI beatae.
            </Text>
          </View>

          <FrequencyType
            title="Monthly"
            type="monthly"
            onPress={() => props.onRadioPress("monthly")}
          />
          <FrequencyType
            title="BiWeekly"
            type="biWeekly"
            onPress={() => props.onRadioPress("biWeekly")}
          />
          <FrequencyType
            title="Weekly"
            type="weekly"
            onPress={() => props.onRadioPress("weekly")}
          />
          <View style={styles.cont2}>
            <Text
              style={[styles.dowText, { fontWeight: "300", lineHeight: 20 }]}
            >
              E.g. Lorem ipsum aut laboriosam quos eius dolorum. Aut ero
              eligendi quI beatae.
            </Text>
          </View>
          <View style={styles.btnWrapper}>
            <Button
              title={"Previous"}
              active={true}
              onPress={() => props.onPreviousPress()}
            />
            <Button
              title={"Next"}
              active={true}
              onPress={() => props.onNextPress()}
            />
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepperViewWrapper: {
    width: "100%",
    marginTop: 20,
  },
  stepperView: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepIndicator: {
    width: wp("8%"),
    height: wp("8%"),
    borderRadius: 100,
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
  },
  stepIndicatorWrapper: {
    width: wp("9.5%"),
    height: wp("9.5%"),
    borderRadius: 100,
    backgroundColor: "#CDEAFE",
    alignItems: "center",
    justifyContent: "center",
  },
  stepIndicatorText: {
    fontSize: wp("4.5%"),
    color: "#fff",
  },
  stepTitle: {
    color: "#4E4B66",
    fontSize: rf(16),
    left: 15,
  },
  stepperContent: {
    paddingLeft: wp("9.5%"),
    marginTop: 10,
  },
  cont2: {
    marginLeft: wp("4%"),
    marginTop: 10,
  },
  dowText: {
    color: "#4E4B66",
    fontSize: rf(12),
    fontWeight: "600",
  },
  weekDaysWrapper: {
    width: "100%",
    height: hp("7%"),
    borderRadius: 20,
    backgroundColor: "#EFF0F6",
    marginTop: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  weekDay: {
    width: wp("10%"),
    height: wp("10%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  weekDayText: {
    fontSize: wp("5%"),
    color: "#fff",
  },
  frequencyTypeWrapper: {
    width: "100%",
    height: hp("7%"),
    borderRadius: 15,
    backgroundColor: "#EFF0F6",
    marginTop: 10,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
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
  frequencyText: {
    fontSize: rf(14),
    color: "#3F51B5",
    marginHorizontal: 7,
    fontWeight: "400",
  },
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 10,
  },
});
