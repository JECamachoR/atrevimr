import * as React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";
import CurrencyInput from 'react-native-currency-input';
import { grayscale } from '../../constants/Colors';

type Props = {
    value: number | undefined,
    handleChange: (v: number | null) => void
}

export default function IncomeCard({ value, handleChange }: Props) {

    return (
        <View style={styles.container}>
            <CurrencyInput
                value={value || null}
                onChangeValue={handleChange}
                style={{width:"100%",height:"100%",fontSize:rf(20)}}
                placeholder={"$$$"}
                placeholderTextColor={grayscale.placeholder}
                delimiter=","
                separator="."
                prefix="$"
                suffix=" MXN"
                precision={0}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: wp('90%'),
        height: hp('7%'),
        justifyContent: "center",
        borderRadius: 100,
        backgroundColor: "#fff",
        paddingHorizontal:"6%"

    },


});
