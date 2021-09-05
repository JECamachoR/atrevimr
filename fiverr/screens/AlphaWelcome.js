import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize"

export default function AlphaWelcome({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.Header}>
        <Text style={{ fontSize: rf(20), fontWeight: "600" }}>You are special.</Text>
      </View>
      {/* Header */}
      {/* Discription */}
      <View style={styles.Discription}>
        <Text style={{ fontSize: rf(16) }}>Before you try our app, </Text>
        <Text style={{ fontSize: rf(16) }}>we want to give you a warm welcome </Text>
        <Text style={{ fontSize: rf(16) }}>and get to know you better.</Text>
      </View>
      {/* Discription */}
      {/* Alpha */}
      <View style={styles.Aplha}>
        <Text style={{ fontSize: rf(12) }}>Thanks for being part of our alpha 3 {'\n'}- Atrevi’s Team</Text>
      </View>
      {/* Alpha */}
      {/* Picture */}
      <View style={styles.Pic}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require('../assets/AlphaPic.png')}
          resizeMode="cover"
        />
      </View>
      {/* Picture */}
      {/* Buttons */}
      <View style={styles.BtnRow}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TheBasic')}>
          <Text style={{ fontWeight: "600", fontSize: rf(16), color: "#fff" }}>Let's go!</Text>
        </TouchableOpacity>
      </View>
      {/* Buttons */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFCC00',
    alignItems: "center"
  },
  Header: {
    width: wp('90%'),
    height: hp('20%'),
    justifyContent: "flex-end",
    marginBottom: 10
  },
  Discription: {
    width: wp('90%'),
    height: hp('11%'),
    justifyContent: "space-evenly"
  },
  Aplha: {
    width: wp('90%'),
    height: hp('8%'),
    justifyContent: "center",
    marginBottom: 10
  },
  Pic: {
    width: wp('90%'),
    height: hp('30%'),
  },
  BtnRow: {
    width: wp('90%'),
    height: hp('12%'),
    justifyContent: "flex-end",
    alignItems: "center"
  },
  btn: {
    width: "52%",
    height: "42%",
    backgroundColor: "#3F51B5",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center"
  }
});
