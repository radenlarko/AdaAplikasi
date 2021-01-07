import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Image, Text, View } from 'react-native'
import { BgSplash, Logo } from '../../assets'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 4500)
    }, [navigation]);
    return (
        <ImageBackground source={BgSplash} style={styles.background}>
            <Image source={Logo} />
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: 205,
        height: 115,
    },
})
