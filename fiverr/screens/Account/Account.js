import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../Components/Header';
import Profile from './Components/Profile';
import OptionsBar from '../../Components/OptionsBar';
import Button from '../../Components/Button'
export default function Account({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='Account' Press={() => navigation.goBack()} />
            </View>
            <View>
                <Profile EditProfile='Edit Profile Picture' />
            </View>
            <View style={styles.NamePasswordWrapper}>
                <OptionsBar Textt='Name' clickk={() => navigation.navigate('Name')} />
                <OptionsBar Textt='Password' clickk={() => navigation.navigate('Password')} />
            </View>
            <View style={styles.BtnWrapper}>
                <View style={styles.BtnContainer}>
                    <Button ButonTxt='Sign Out' />
                    <TouchableOpacity>
                        <Text style={{ fontSize: rf(12), color: '#EB3333' }}>Delete Account</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    NamePasswordWrapper: {
        height: hp('14%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-evenly'
    },
    BtnWrapper: {
        height: hp('45%'),
        width: wp('100%'),
        justifyContent: 'flex-end'
    },
    BtnContainer: {
        height: hp('15%'),
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'

    }




});
