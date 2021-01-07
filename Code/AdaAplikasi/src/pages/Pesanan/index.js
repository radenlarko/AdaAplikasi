import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Pesanan = () => {
    return (
        <View style={styles.container}>
            <Text>Pesanan</Text>
        </View>
    )
}

export default Pesanan

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
