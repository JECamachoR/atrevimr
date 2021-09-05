import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Options({ navigation ,MenuTxt,Img,Click }) {
    return (
        <TouchableOpacity onPress={Click} style={styles.container}>
            <View style={styles.MenuIcon}>
                <Image style={{ height: '100%', width: '100%' }} 
                source={Img} />
            </View>
            <View style={styles.IconBody}>
                <Text style={{ fontSize: rf(12), color: '#4E4B66', marginLeft: wp('2%') }}>{MenuTxt}</Text>
                <Ionicons name="chevron-forward" size={24} color="#4E4B66" />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('6%'),
        width: wp('90%'),
        backgroundColor: '#EFF0F6',
        borderRadius: 10,
        flexDirection: 'row',
        paddingHorizontal: wp('2%'),
        alignItems: 'center'
    },

    IconBody: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',

    },
    MenuIcon: {
        height: hp('3%'),
        width: hp('3%'),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }









});
