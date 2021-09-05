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
export default function StepperProfile(props) {
  return (
    <View style={styles.stepperViewWrapper}>
      <View style={styles.stepperView}>
        <StepIndicator number={1} activated={true} completed={props.position>1?true:false} />
        <Text style={styles.stepTitle}>{props.title}</Text>
      </View>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            height: props.height, // Bind opacity to animated value
            opacity: props.opacity,
          },
        ]}
      >
        <View style={[styles.stepperContent,{display:props.position==1?"flex":"none"}]}>
          <View style={styles.cont1}>
            <View style={styles.profileImg}>
              {props.selectedImg ? (
                <Image
                  source={{uri:props.selectedImg}}
                  resizeMode="contain"
                  style={styles.pImg}
                />
              ) : (
                <Image
                  source={require("../../../assets/noProfileImg.png")}
                  resizeMode="contain"
                  style={styles.pImg}
                />
              )}
              <TouchableOpacity style={styles.editImg} onPress={props.onSelectImage}>
                <MaterialIcons name="edit" size={wp("3.5%")} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.profileText}>
              <Text
                style={{
                  color: "#A0A3BD",
                  fontSize: rf(17),
                  left: 20,
                  letterSpacing: 1.5,
                }}
              >
                You are beautiful
              </Text>
            </View>
          </View>
          <View style={styles.cont2}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.textInput}
                placeholder="Your Name"
                placeholderTextColor="#A0A3BD"
                onChangeText={(val) => props.onNameChange(val)}
                value={props.name}
              />
            </View>
          </View>
          <View style={styles.cont3}>
            <Button
              title={"Next"}
              active={props.name ? true : false}
              onPress={() => (props.name ? props.onNextPress() : null)}
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
  cont1: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImg: {
    width: wp("20%"),
    height: wp("20%"),
    borderRadius: 100
  },
  pImg: {
    width: "100%",
    height: "100%",
    borderRadius: 100
  },
  editImg: {
    width: wp("6%"),
    height: wp("6%"),
    backgroundColor: "#3F51B5",
    borderRadius: 100,
    position: "absolute",
    right: 5,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    width: "95%",
    height: hp("6%"),
    borderRadius: 100,
    backgroundColor: "#EFF0F6",
    borderWidth: 1,
    borderColor: "#D9DBE9",
    padding: 10,
  },
  cont2: {
    marginTop: 20,
  },
  textInput: {
    width: "90%",
    height: "100%",
    fontSize: rf(16),
    marginLeft: "5%",
  },
});
