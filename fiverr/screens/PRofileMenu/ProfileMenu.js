import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Options from './Components/Options';
import ProfileDetail from './Components/ProfileDetail';
export default function ProfileMenu({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <ProfileDetail ProfileName='Sabestian R' ProfileNum='+92 786 878 908' />
            </View>
            <View style={styles.AccountWrapper}>
                <Options Img={require('../../assets/MaleCircle.png')}
                    MenuTxt='Account' Click={() => navigation.navigate('Account')} />
            </View>
            <View style={{ paddingHorizontal: wp('7%'), height: hp('3%') }}>
                <Text style={{ fontSize: rf(11), color: '#4E4B66' }}>App</Text>
            </View>
            <View style={styles.MenuOptionsWrapper}>
                <Options Img={require('../../assets/DarkMode.png')}
                    MenuTxt='Dark mode' Click={() => navigation.navigate('DarkMode')} />
                <Options Img={require('../../assets/Notification.png')}
                    MenuTxt='Notification' Click={() => navigation.navigate('Notifications')} />
                <Options Img={require('../../assets/About.png')}
                    MenuTxt='About Atrevi' Click={() => navigation.navigate('About')}/>
            </View>
            <View style={{ paddingHorizontal: wp('7%'), height: hp('4%'), justifyContent: 'center' }}>
                <Text style={{ fontSize: rf(11), color: '#4E4B66' }}>Support</Text>
            </View>
            <View style={styles.SupportMenuWrapper}>
                <Options Img={require('../../assets/OnlineSupport.png')}
                    MenuTxt='Online Support' />
                <Options Img={require('../../assets/Feedback.png')}
                    MenuTxt='Feedback' />
            </View>
            <View style={styles.HeartTxtWrapper}>
                <Text style={{ fontSize: rf(12), color: '#4E4B66' }}>Made with ❤️ in Mexico </Text>
            </View>
            <View style={styles.MenuOptionsWraaper}>
                <TouchableOpacity style={styles.GoalOptionBody}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={require('../../assets/GoalTab.png')}
                        resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.GoalOptionBody}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={require('../../assets/Savings.png')}
                        resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.GoalOptionBody}>
                    <Image style={{ height: '100%', width: '100%' }}
                        source={require('../../assets/Settings.png')}
                        resizeMode='contain' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    AccountWrapper: {
        height: hp('8%'),
        width: wp('100%'),
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
    },
    MenuOptionsWrapper: {
        height: hp('20%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-evenly',
    },
    SupportMenuWrapper: {
        height: hp('14%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-evenly',

    },
    HeartTxtWrapper: {
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center'
    },
    MenuOptionsWraaper: {
        height: hp('10%'),
        width: wp('100%'),
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: wp('5%'),
        justifyContent: 'space-between'
    },
    GoalOptionBody: {
        height: '60%',
        width: '18%',
        justifyContent: 'center',
        alignItems: 'center',

    }








});
