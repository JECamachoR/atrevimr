import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { RFValue as rf } from "react-native-responsive-fontsize";

type Props = {
    text: string,
    onPress: () => void
}

export default function Buttons({ text,onPress }: Props) {

    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={{fontSize:rf(16),color:"#fff"}}>{text}</Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    btn: {
        width: wp('26%'),
        height: hp('5%'),
        backgroundColor: "#1A224C",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight:"3%"
    }

});
