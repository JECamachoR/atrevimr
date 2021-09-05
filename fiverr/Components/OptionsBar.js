import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function OptionsBar({ navigation, Textt, clickk }) {
    return (
        <TouchableOpacity onPress={clickk} style={styles.TextBody}>
            <Text style={{ fontSize: rf(13), color: '#4E4B66', fontWeight: 'bold' }}>{Textt}</Text>
            <Ionicons name="chevron-forward" size={24} color="#4E4B66" />
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    TextBody: {
        flex: 0.45,
        backgroundColor: '#EFF0F6',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10
    },




});
