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
import SavingCard from "../../components/initialForm/SavingCard";
import Buttons from "../../components/initialForm/Buttons";
import { StackScreenProps } from "@react-navigation/stack";
import { InitialFormParamList } from "../../../types";
import InitialFormContext from "../../contexts/InitialFormContext";

type Props = StackScreenProps<InitialFormParamList, "Spending">

export default function PersonalFinance({ navigation }: Props) {

    const f = React.useContext(InitialFormContext)

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
          onPress={() => f.setFieldValue("selfRating", "Good")}
          selected={f.values.selfRating}
        />
         <SavingCard
          title="Bad: I don’t keep a record"
          type="Bad"
          onPress={() => f.setFieldValue("selfRating", "Bad")}
          selected={f.values.selfRating}
        />
         <SavingCard
          title="Ugly: I keep a record but it’s disorganized"
          type="Ugly"
          onPress={() => f.setFieldValue("selfRating", "Ugly")}
          selected={f.values.selfRating}
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
          onPress={() => f.setFieldValue("recordKeepingPlace", "Digital")}
          selected={f.values.recordKeepingPlace}
        />
          <SavingCard
          title="Handwritten: Paper or your phone’s notes"
          type="Handwritten"
          onPress={() => f.setFieldValue("recordKeepingPlace", "Handwritten")}
          selected={f.values.recordKeepingPlace}
        />
         <SavingCard
          title="Ethereal: It’s in my mind"
          type="Ethereal"
          onPress={() => f.setFieldValue("recordKeepingPlace", "Ethereal")}
          selected={f.values.recordKeepingPlace}
        />
         <SavingCard
          title="I don’t keep a record"
          type="none"
          onPress={() => f.setFieldValue("recordKeepingPlace", "none")}
          selected={f.values.recordKeepingPlace}
        />
        
        {/* SavingCards */}

        {/* Buttons */}
        <View style={styles.BtnRow}>
          <Buttons text="Previous" onPress={() => navigation.goBack()}  />
          <Buttons text="Next" onPress={() => {
              if (!f.values.recordKeepingPlace || !f.values.selfRating) return
              f.submitForm()
          }} />
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
