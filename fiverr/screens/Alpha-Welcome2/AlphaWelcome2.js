import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import IncomeCard from '../../Components/IncomeCard';
import Buttons from '../../Components/Buttons';

export default function AlphaWelcome2({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Heading */}
            <View style={styles.Heading}>
                <Text style={styles.headingFont}>Spending</Text>
                <Text style={{ fontSize: rf(14), color: "#fff" }}>1/3</Text>
            </View>
            {/* Heading */}
            {/* IncomeDetails */}
            <View style={styles.IncomeDetail}>
                <Text style={styles.DetailsFont}>What is your monthly income?</Text>
            </View>
            {/* IncomeDetails */}
            {/* Cards */}
            <View style={styles.Card}>
                <IncomeCard />
            </View>
            {/* Cards */}
            {/* SpendDetails */}
            <View style={styles.SpendDetail}>
                <Text style={styles.DetailsFont}>How much do you spend in a month?</Text>
                <Text style={{ fontSize: rf(12), color: "#fff" }}>Only take into account your fixed expenses {'\n'} (rent, food, car, etc.)</Text>
            </View>
            {/* SpendDetails */}
            {/* Cards */}
            <View style={styles.Card}>
                <IncomeCard />
            </View>
            {/* Cards */}

            {/* Picture */}
            <View style={styles.Pic}>
                <Image
                    style={{ width: '100%', height: "100%" }}
                    source={require('../../assets/PaymentPic.png')}
                    resizeMode="cover"
                />
            </View>
            {/* Picture */}
            {/* Button */}
            <View style={styles.BtnRow}>
                <Buttons txt="Previous" onpress={() => navigation.goBack()} />
                <Buttons txt="Next" onpress={() => navigation.navigate('Savings')} />
            </View>
            {/* Button */}


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F51B5',
        alignItems: "center"
    },
    Heading: {
        width: wp('90%'),
        height: hp('11%'),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end"

    },
    IncomeDetail: {
        width: wp('90%'),
        height: hp('7%'),
        justifyContent: "flex-end"
    },
    Card: {
        width: wp('90%'),
        height: hp('11%'),
        justifyContent: "center"
    },
    SpendDetail: {
        width: wp("90%"),
        height: hp('9%'),
        justifyContent: "space-evenly"
    },
    headingFont: {
        fontSize: rf(20),
        fontWeight: "700",
        color: "#fff"
    },
    DetailsFont: {
        fontSize: rf(16),
        color: "#fff",
        fontWeight: "700"
    },
    Pic: {
        width: wp('90%'),
        height: hp('33%'),

    },
    BtnRow: {
        width: wp('90%'),
        height: hp('15%'),
        alignItems: "center",
        flexDirection: "row",
    }

});
