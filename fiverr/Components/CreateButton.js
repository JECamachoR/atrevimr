import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';

export default function CreateButton({ Onclick }) {
    return (
        <TouchableOpacity onPress={Onclick} style={styles.container}>
            <Text style={{ fontSize: rf(16),fontWeight: '600',color: '#fff' }}>Create account</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        width: wp('60%'),
        backgroundColor: '#3F51B5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },








});
