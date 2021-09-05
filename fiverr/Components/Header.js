import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Header({ navigation , Title, Press}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={Press}>
                <Ionicons name="chevron-back" size={24} color="#3F51B5" />
            </TouchableOpacity>
            <View style={styles.HeaderTxtBody}>
                <Text style={{ fontSize: rf(18), color: '#4E4B66', fontWeight:'bold' }}>{Title}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: hp('12%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        flexDirection: 'row',
        alignItems: 'flex-end',
        
     
    },
    HeaderTxtBody: {
        flex: 0.9,
        alignItems: 'center',
        justifyContent: 'center'
    }




});
