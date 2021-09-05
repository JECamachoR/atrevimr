import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import { StyleSheet, View, Text, Switch } from 'react-native';
import Header from '../../Components/Header';
export default function Notifications({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Header Title='Dark Mode' Press={() => navigation.goBack()} />
            </View>
            <View style={styles.NotificationContainer}>
                <View style={styles.EssentialBody}>
                    <View style={styles.TxtBody}>
                        <Text style={{ fontSize: rf(13), color: '#4E4B66', fontWeight: 'bold' }}>Essential</Text>
                        <Text style={{ fontSize: rf(11), color: '#4E4B66' }}>Deserunt et debitis, ut, labori, quos eius dolorum.</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#3F51B5", true: "#3F51B5" }}
                    />
                </View>
                <View style={styles.MotivationalBody}>
                    <View style={styles.TxtBody}>
                        <Text style={{ fontSize: rf(13), color: '#4E4B66', fontWeight: 'bold' }}>Motivational</Text>
                        <Text style={{ fontSize: rf(11), color: '#4E4B66' }}>Deserunt et debitis, ut, labori, quos eius dolorum.</Text>
                    </View>
                    <Switch
                        trackColor={{ false: "#3F51B5", true: "#3F51B5" }}
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
    NotificationContainer: {
        height: hp('20%'),
        width: wp('100%'),
        paddingHorizontal: wp('5%'),
        marginTop: hp('2%'),
        justifyContent: 'space-evenly'
    },
    EssentialBody: {
        flex: 0.45,
        backgroundColor: '#EFF0F6',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10
    },

    TxtBody: {
        flex: 0.5,

    },
    MotivationalBody: {
        flex: 0.45,
        backgroundColor: '#EFF0F6',
        paddingHorizontal: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10
    }



});
