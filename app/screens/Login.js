import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FacebookSocialButton } from "react-native-social-buttons";
 

function Login(props) {
    return (
        <ImageBackground style={styles.background} source={require ("../assets/background.jpg")}>
            <TouchableOpacity> 
            <View style={styles.loginButtonGoogle}> 
            <Image
                 source={require("../assets/google-plus.png")} style={styles.imageIconStyle}
         ></Image>
            <Text style={styles.textStyle}> Sign In with Google </Text>
            </View> 
            </TouchableOpacity>

            <TouchableOpacity> 
            <View style={styles.loginButtonFacebook}> 
            <Image
                 source={require("../assets/facebook.png")} style={styles.imageIconStyle}
         ></Image>
            <Text style={styles.textStyle}> Sign In with Facebook </Text>
            </View> 
            </TouchableOpacity>

            <TouchableOpacity> 
            <View style={styles.loginButtonRegister}> 
            <Image
                 source={require("../assets/huella.png")} style={styles.imageIconStyle}
         ></Image>
            <Text style={styles.textStyle}> Don't you have an account? Join the community! </Text>
            </View> 
            </TouchableOpacity>
         
        </ImageBackground>
    );

    
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end"
    }, 
    loginButtonGoogle: {
        width: "100%",
        height: 50,
        backgroundColor: "#FF5733",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
       
        
    },
    loginButtonFacebook: {
        width: "100%",
        height: 50,
        backgroundColor: "#3b5998",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    loginButtonRegister: {
        width: "100%",
        height: 50,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    ButtonText: {
       
    }, 

    facebookStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#485a96",
        borderWidth: 0.5,
        borderColor: "#fff",
        height: 40,
        width: 220,
        borderRadius: 5,
        margin: 5,
        position: "relative",
        marginBottom: 0
      },
      imageIconStyle: {
        padding: 10,
        marginLeft: 15,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignSelf: "center"
      },
      textStyle: {
        color: "#fff",
        marginLeft: 20,
        marginRight: 20,
      }
    
})
export default Login;