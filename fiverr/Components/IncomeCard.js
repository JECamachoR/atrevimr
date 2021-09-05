import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue as rf } from "react-native-responsive-fontsize";

export default function IncomeCard({ navigation,txt }) {

    return (
        <View style={styles.container}>
            <TextInput
            style={{width:"100%",height:"100%",fontSize:rf(20)}}
            placeholder="$0"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        height: hp('7%'),
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "#fff",
        paddingHorizontal:"6%"

    },


});
