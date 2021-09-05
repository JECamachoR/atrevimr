import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";
import SavingCard from "../../Components/SavingCard";
import IncomeCard from "../../Components/IncomeCard";
import AccountCard from "./components/AccountCard";
import Buttons from "../../Components/Buttons";

export default function Savings({ navigation }) {
  const [selectedMoneyMethod, setSelectedMoneyMethod] = useState("Monthly");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <View style={styles.Heading}>
          <Text style={styles.headingFont}>Savings</Text>
          <Text style={{ fontSize: rf(14), color: "#fff" }}>2/3</Text>
        </View>
        {/* Heading */}
        {/* Detail */}
        <View style={styles.IncomeDetail}>
          <Text style={styles.DetailsFont}>How often do you save money?</Text>
        </View>
        {/* Detail */}

        {/* SavingCards */}
        <SavingCard
          title="Monthly"
          type="Monthly"
          onPress={() => setSelectedMoneyMethod("Monthly")}
          selected={selectedMoneyMethod}
        />
        <SavingCard
          title="Weekly"
          type="Weekly"
          onPress={() => setSelectedMoneyMethod("Weekly")}
          selected={selectedMoneyMethod}
        />
        <SavingCard
          title="Daily"
          type="Daily"
          onPress={() => setSelectedMoneyMethod("Daily")}
          selected={selectedMoneyMethod}
        />
        <SavingCard
          title="I save irregularly"
          type="irregularly"
          onPress={() => setSelectedMoneyMethod("irregularly")}
          selected={selectedMoneyMethod}
        />
        <SavingCard
          title="I don’t save"
          type="IDsave"
          onPress={() => setSelectedMoneyMethod("IDsave")}
          selected={selectedMoneyMethod}
        />
        {/* SavingCards */}
        {/* Discription */}
        <View style={styles.Discriptions}>
          <Text style={styles.DiscriptionsFont}>
            How much do you save in a year?
          </Text>
        </View>
        {/* Discription */}
        {/* IncomeCard */}
        <View>
          <IncomeCard />
        </View>
        {/* IncomeCard */}
        {/* Discription */}
        <View style={styles.Discriptions}>
          <Text style={styles.DiscriptionsFont}>
            Where do you keep your savings?
          </Text>
        </View>
        {/* Discription */}

        {/* AccountCard */}
        <View style={{ marginBottom: "7%" }}>
          <AccountCard />
        </View>
        {/* AccountCard */}
        {/* Buttons */}
        <View style={styles.BtnRow}>
          <Buttons txt="Previous"  onpress={() => navigation.goBack()} />
          <Buttons
            txt="Next"
            onpress={() => navigation.navigate("PersonalFinance")}
          />
        </View>
        {/* Buttons */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3F51B5",
    alignItems: "center",
  },
  Heading: {
    width: wp("90%"),
    height: hp("11%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  IncomeDetail: {
    width: wp("90%"),
    height: hp("7%"),
    justifyContent: "flex-end",
    marginBottom: "6%",
  },
  Card: {
    width: wp("90%"),
    height: hp("11%"),
    justifyContent: "center",
  },
  SpendDetail: {
    width: wp("90%"),
    height: hp("9%"),
    justifyContent: "space-evenly",
  },
  headingFont: {
    fontSize: rf(20),
    fontWeight: "700",
    color: "#fff",
  },
  DetailsFont: {
    fontSize: rf(16),
    color: "#fff",
    fontWeight: "700",
  },
  BtnRow: {
    width: wp("90%"),
    height: hp("15%"),
    alignItems: "center",
    flexDirection: "row",
  },
  Discriptions: {
    width: wp("90%"),
    height: hp("6%"),
    justifyContent: "center",
  },
  DiscriptionsFont: {
    fontSize: rf(16),
    fontWeight: "700",
    color: "#fff",
  },
});
