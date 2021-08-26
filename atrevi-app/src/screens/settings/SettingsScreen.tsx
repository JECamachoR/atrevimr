import { Auth } from "aws-amplify"
import React from "react"
import { StyleSheet } from "react-native"
import Button from "../../components/Button"
import { Text, View } from "../../components/Themed"

const SettingsScreen = (): React.ReactElement => {

    return (
        <View style={styles.container}>
            <Text>Perfil</Text>
            <Button
                title="logout"
                onPress={() => Auth.signOut()}
            />
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    }
})
