import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, View, Image } from 'react-native';
import Header from '../../Components/Header';
import OptionsBar from '../../Components/OptionsBar';
export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='About' Press={() => navigation.goBack()} />
            </View>
            <View style={styles.LogoWrapper}>
                <View style={styles.LogoBody}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={require('../../assets/Logo2.png')}
                        resizeMode='contain' />
                </View>
            </View>
            <View style={styles.TermsContainer}>
                <OptionsBar Textt='Terms & Conditions' />
                <OptionsBar Textt='Provacy Notice' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    LogoWrapper: {
        height: hp('10%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    LogoBody: {
        height: '100%',
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TermsContainer: {
        height: hp('13%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        marginTop: hp('2%'),
        justifyContent: 'space-evenly'
    },
    
});
