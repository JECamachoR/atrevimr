import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, View, Text, Switch } from 'react-native';
import Header from '../../Components/Header';
export default function DarkMode({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='Dark Mode' Press={() => navigation.goBack()} />
            </View>
            <View style={styles.ModeChangeContainer}>
                <View style={styles.ModeChangeBody}>
                    <Text style={{ fontSize: rf(13), color: '#4E4B66', fontWeight:'bold' }}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: "#787880", true: "#3F51B5" }}
                    />
                </View>
                <View style={styles.DeviceSettingBody}>
                    <Text style={{ fontSize: rf(13), color: '#4E4B66', fontWeight:'bold' }}>Use device setting</Text>
                    <Switch
                        trackColor={{ false: "#787880", true: "#3F51B5" }}
                    />
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
    ModeChangeContainer: {
        height: hp('14%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        marginTop: hp('2%'),
        justifyContent:'space-evenly'
    },
    ModeChangeBody: {
        flex: 0.45,
        backgroundColor: '#EFF0F6',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius:10
    },
    DeviceSettingBody: {
        flex: 0.45,
        backgroundColor: '#EFF0F6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        borderRadius:10

    }



});
