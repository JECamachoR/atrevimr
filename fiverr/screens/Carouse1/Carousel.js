import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CreateButton from "../../Components/CreateButton";
import Logo from "../../Components/Logo";
import PagerView from "react-native-pager-view";
import Carousel1 from "./Carouse1";
import Carousel2 from "./Carouse2";
import Carousel3 from "./Carouse3";
export default function Carouse({ navigation }) {
  const [swipePos, setSwipePos] = useState({ position: 0, offset: 0 });
  console.log(swipePos.position);
  return (
    <View style={styles.container}>
      <Logo />
      <PagerView
        style={styles.viewPager}
        initialPage={0}
        onPageScroll={(e) => {
          setSwipePos(e.nativeEvent);
        }}
      >
        <View style={styles.page} key="1">
          <Carousel1 />
        </View>
        <View style={styles.page} key="2">
          <Carousel2 />
        </View>
        <View style={styles.page} key="3">
          <Carousel3 />
        </View>
      </PagerView>
      <View style={styles.ProgressBarWrapper}>
        <View style={styles.ProgressBarContainer}>
          <View
            style={[
              styles.ProgressBarBody,
              {
                backgroundColor: "#3F51B5",
                width: wp("7%"),
                left:
                  swipePos?.position == 1
                    ? 40
                    : swipePos?.position == 2
                    ? 65
                    : swipePos?.offset * 29,
              },
            ]}
          ></View>
          <View
            style={[
              styles.ProgressBarBody,
              {
                right:
                  swipePos?.position == 1
                    ? 30
                    : swipePos?.position < 1
                    ? swipePos?.offset * 29
                    : 28,
              },
            ]}
          ></View>
          <View
            style={[
              styles.ProgressBarBody,
              {
                right:
                  swipePos?.position == 2
                    ? 35
                    : swipePos?.position == 1
                    ? swipePos?.offset * 29
                    : 0,
              },
            ]}
          ></View>
        </View>
      </View>
      <View style={styles.CreateBtnWrapper}>
        <CreateButton Onclick={() => navigation.navigate("AlphaWelcome")} />
      </View>
      <View style={styles.LoginTxtWrapper}>
        <Text style={{ fontSize: rf(12), color: "#1A224C", bottom: 10 }}>
          Already a member?
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: rf(12), color: "#3F51B5", bottom: 10 }}>
            {" "}
            Log in
          </Text>
        </TouchableOpacity>
      </View>
    </View>
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
    width: "70%",
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
    width: "22%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ProgressBarBody: {
    height: 9,
    width: wp("4%"),
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
  viewPager: {
    flex: 0.9,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
