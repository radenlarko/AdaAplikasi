import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class DesainTampilan extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> Adyawinsa Group </Text>
                <View style={styles.garis} />

                {/* Isi */}
                <View style={styles.divider}>
                    <Text>Flex Direction Row (Vertical)</Text>
                    <View style={styles.flexVertical}>
                        <View style={styles.kotakBiru}></View>
                        <View style={styles.kotakMerah}></View>
                        <View style={styles.kotakHijau}></View>
                    </View>
                    <Text>Flex Direction Row (Horizontal)</Text>
                    <View>
                        <View style={styles.kotakBiru}></View>
                        <View style={styles.kotakMerah}></View>
                        <View style={styles.kotakHijau}></View>
                    </View>
                    <Text>Justify Content</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={styles.kotakBiru}></View>
                        <View style={styles.kotakMerah}></View>
                        <View style={styles.kotakHijau}></View>
                    </View>
                    <Text>Align Item</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View style={styles.kotakBiru}></View>
                        <View style={styles.kotakMerah}></View>
                        <View style={styles.kotakHijau}></View>
                    </View>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    container: {padding: 30},
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center"
    },
    garis: {
        borderBottomWidth: 0.7,
        marginTop: 8,
        marginHorizontal: 40
    },
    divider: {
        marginTop: 30
    },
    flexVertical: {
        flexDirection: "row"
    },
    kotakBiru: {
        width: 50,
        height: 50,
        backgroundColor: "midnightblue"
    },
    kotakMerah: {
        width: 50,
        height: 20,
        backgroundColor: "tomato"
    },
    kotakHijau: {
        width: 50,
        height: 50,
        backgroundColor: "teal"
    }
})
