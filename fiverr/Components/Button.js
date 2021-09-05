import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Button({ navigation, ButonTxt }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={{ fontSize: rf(14), color: '#fff' }}>{ButonTxt}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        width: wp('90%'),
        backgroundColor: '#3F51B5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },




});
