import * as  React from "react";
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
import IncomeCard from "../../components/initialForm/IncomeCard";
import AccountCard from "../../components/initialForm/AccountCard";
import Buttons from "../../components/initialForm/Buttons";
import { StackScreenProps } from "@react-navigation/stack";
import { InitialFormParamList } from "../../../types";
import InitialFormContext from "../../contexts/InitialFormContext";

type Props = StackScreenProps<InitialFormParamList, "Spending">

export default function Savings({ navigation }: Props) {

  const formik = React.useContext(InitialFormContext)

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
          onPress={() => formik.setFieldValue("frequency", "Monthly")}
          selected={formik.values.frequency}
        />
        <SavingCard
          title="Weekly"
          type="Weekly"
          onPress={() => formik.setFieldValue("frequency", "Weekly")}
          selected={formik.values.frequency}
        />
        <SavingCard
          title="Daily"
          type="Daily"
          onPress={() => formik.setFieldValue("frequency", "Daily")}
          selected={formik.values.frequency}
        />
        <SavingCard
          title="I save irregularly"
          type="irregularly"
          onPress={() => formik.setFieldValue("frequency", "irregularly")}
          selected={formik.values.frequency}
        />
        <SavingCard
          title="I don’t save"
          type="IDsave"
          onPress={() => formik.setFieldValue("frequency", "IDsave")}
          selected={formik.values.frequency}
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
          <IncomeCard
            value={formik.values.yearlySavings}
            handleChange={(v) => formik.setFieldValue("yearlySavings", v || undefined)}
          />
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
          <AccountCard
            value={formik.values.keepsSavings}
            handleChange={v => formik.setFieldValue("keepsSavings", v)}
          />
        </View>
        {/* AccountCard */}
        {/* Buttons */}
        <View style={styles.BtnRow}>
          <Buttons text="Previous"  onPress={() => navigation.goBack()} />
          <Buttons
            text="Next"
            onPress={() => {
                if (
                    !formik.values.frequency ||
                    !formik.values.keepsSavings || 
                    !formik.values.yearlySavings
                ) return
                navigation.navigate("PersonalFinance")
            }}
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
