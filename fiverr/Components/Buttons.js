import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";

export default function Buttons({ navigation, txt,onpress }) {

    return (
        <TouchableOpacity style={styles.btn} onPress={onpress}>
            <Text style={{fontSize:rf(16),color:"#fff"}}>{txt}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btn: {
        width: wp('26%'),
        height: hp('5%'),
        backgroundColor: "#1A224C",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight:"3%"
    }

});
