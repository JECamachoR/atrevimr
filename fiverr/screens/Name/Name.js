import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
export default function Name({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='Name' Press={() => navigation.goBack()} />
            </View>
            <View style={styles.TxtWrapper}>
                <Text style={{ fontSize: rf(12), color: '#4E4B66' }}>Edit your name</Text>
            </View>
            <View style={styles.TxtInputWrapper}>
                <View style={styles.TxtInputBody}>
                    <TextInput style={{ width: '100%', height: '100%' }} placeholder='Name' />
                </View>
            </View>
            <View style={styles.BtnContainer}>
                <Button ButonTxt='Save Changes' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    TxtWrapper: {
        height: hp('7%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'center'
    },
    TxtInputWrapper: {
        height: hp('9%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'center',

    },
    TxtInputBody: {
        height: hp('6%'),
        width: wp('90%'),
        backgroundColor: '#EFF0F6',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#D9DBE9',
        paddingHorizontal: '5%'
    },
    BtnContainer: {
        height: hp('10%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'center',
    }

});
