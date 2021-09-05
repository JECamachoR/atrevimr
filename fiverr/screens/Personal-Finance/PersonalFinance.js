import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { RFValue as rf } from "react-native-responsive-fontsize";
import SavingCard from "../../Components/SavingCard";
import Buttons from "../../Components/Buttons";

export default function PersonalFinance({ navigation }) {

    const [selectedMoneyMethod, setSelectedMoneyMethod] = React.useState("Monthly");

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Heading */}
        <View style={styles.Heading}>
          <Text style={styles.headingFont}>Personal Finance</Text>
          <Text style={{ fontSize: rf(14), color: "#fff" }}>3/3</Text>
        </View>
        {/* Heading */}
        {/* IncomeDetail */}
        <View style={styles.IncomeDetail}>
          <Text style={styles.DetailsFont}>Rate your finance management</Text>
        </View>
        {/* IncomeDetail */}
        {/* Discription */}
        <View style={styles.Discriptions}>
          <Text style={styles.DiscriptionsFont}>
            In general, how good are you with numbers?
          </Text>
        </View>
        {/* Discription */}

        {/* SavingCards */}
        <SavingCard
          title="Good: I have a black belt in finance"
          type="Good"
          onPress={() => setSelectedMoneyMethod("Good")}
          selected={selectedMoneyMethod}
        />
         <SavingCard
          title="Bad: I don’t keep a record"
          type="Bad"
          onPress={() => setSelectedMoneyMethod("Bad")}
          selected={selectedMoneyMethod}
        />
         <SavingCard
          title="Ugly: I keep a record but it’s disorganized"
          type="Ugly"
          onPress={() => setSelectedMoneyMethod("Ugly")}
          selected={selectedMoneyMethod}
        />
        {/* SavingCards */}
        {/* Discription */}
        <View style={styles.Discriptions}>
          <Text style={styles.DiscriptionsFont}>
            Where do you keep the income and expenses record?
          </Text>
        </View>
        {/* Discription */}

        {/* SavingCards */}
          <SavingCard
          title="Digital tools: Excel or dedicated apps"
          type="Digital"
          onPress={() => setSelectedMoneyMethod("Digital")}
          selected={selectedMoneyMethod}
        />
          <SavingCard
          title="Handwritten: Paper or your phone’s notes"
          type="Handwritten"
          onPress={() => setSelectedMoneyMethod("Handwritten")}
          selected={selectedMoneyMethod}
        />
         <SavingCard
          title="Ethereal: It’s in my mind"
          type="Ethereal"
          onPress={() => setSelectedMoneyMethod("Ethereal")}
          selected={selectedMoneyMethod}
        />
         <SavingCard
          title="I don’t keep a record"
          type="none"
          onPress={() => setSelectedMoneyMethod("none")}
          selected={selectedMoneyMethod}
        />
        
        {/* SavingCards */}

        {/* Buttons */}
        <View style={styles.BtnRow}>
          <Buttons txt="Previous" onpress={() => navigation.goBack()}  />
          <Buttons txt="Next" onpress={() => navigation.navigate("Stepper")} />
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
    height: hp("7%"),
    justifyContent: "center",
  },
  DiscriptionsFont: {
    fontSize: rf(14),
    color: "#fff",
  },
});
