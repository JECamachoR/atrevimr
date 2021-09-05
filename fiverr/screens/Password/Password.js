import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, View } from 'react-native';
import Header from '../../Components/Header';
import TxtInputComponent from './Component/TxtInputComponent';
import Button from '../../Components/Button';
export default function Password({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='Password' Press={() => navigation.goBack()} />
            </View>
            <View style={styles.TxtInputWrapper}>
                <TxtInputComponent InputText='Old Password' />
                <TxtInputComponent InputText='New Password' />
                <TxtInputComponent InputText='Retype New Password' />
            </View>
            <View style={styles.BtnContainer}>
                <Button ButonTxt='Change Password' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    TxtInputWrapper: {
        height: hp('22%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop:hp('2%')

    },
    BtnContainer: {
        height: hp('10%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'center',
    }


});
