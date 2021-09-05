import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Image, StyleSheet, View } from 'react-native';
export default function Logo({ navigation }) {
  return (

      <View style={styles.LogoContainer}>
        <View style={styles.LogoBody}>
          <Image style={{ height: '100%', width: '100%' }} source={require('../assets/Logo.png')}
            resizeMode='center' />
        </View>
      </View>
   
  );
}

const styles = StyleSheet.create({

  LogoContainer: {
    height: hp('20%'),
    width: wp('100%'),
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  LogoBody: {
    height: '30%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',

  },










});
