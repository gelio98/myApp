import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import Home from './Home';



function SplashScreen(props) {
    
    
    return (
      //  <ImageBackground style={styles.background} source={require ("../assets/background.jpg")}>
            <Home></Home>
       // </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignContent: 'center'
    }
    
})

export default SplashScreen;