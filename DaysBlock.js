import React from 'react';
import { StyleSheet, Text, View, StatusBar} from "react-native";

const DaysBlock = () => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 380,
        backgroundColor: 'red'
    },
    block: {
        height: 120,
        width: 380,
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'green',
    }
})

export default DaysBlock;