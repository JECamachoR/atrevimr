import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function ProfileDetail({ navigation,ProfileName, ProfileNum }) {
    return (

        <View style={styles.ProfilePicWrapper}>
            <TouchableOpacity style={styles.ProfilePicBody}>
                <Image style={{ height: '100%', width: '100%' }} source={require('../../../assets/ProfilePic.png')}
                    resizeMode='contain' />
            </TouchableOpacity>
            <View style={styles.ProfileNameBody}>
                <Text style={{ fontSize: rf(18) }}>{ProfileName}</Text>
                <Text style={{ fontSize: rf(10), color: '#A0A3BD' }}>{ProfileNum}</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    ProfilePicWrapper: {
        height: hp('30%'),
        width: wp('100%'),
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    ProfilePicBody: {
        height: hp('15%'),
        width: hp('15%'),
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    ProfileNameBody: {
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: hp('1%'),

    },








});
