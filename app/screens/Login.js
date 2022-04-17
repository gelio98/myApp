import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { FacebookSocialButton } from "react-native-social-buttons";
import AppTextInput from "../components/TextInput"
import AppButton from "../components/ButtonLogin"
 

function Login(props) {
    return (
        <ImageBackground resizeMode="cover" style={styles.background} source={require ("../assets/background.jpg")}>
            <View style={styles.LoginContext}>
            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
        
            placeholder="Email"
            textContenType="emailAddress" />

            <AppTextInput
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
  
            placeholder="Password"
            secureTextEntry
            textContenType="password" />

            <AppButton title="Login" color="secondary" ></AppButton>
            
            </View>

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
        justifyContent: "flex-end",
        backgroundColor: "white"
        
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
        backgroundColor: "#77DD77",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    LoginContext: {
        width: "100%",
        height: "40%",
        //backgroundColor: "blue",
        position: "absolute",
        top: "30%",
        padding: 20
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
        marginLeft: 20,
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