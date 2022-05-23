import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { FacebookSocialButton } from "react-native-social-buttons";
import AppTextInput from "../components/TextInput"
import AppButton from "../components/ButtonLogin"
import ErrorMessage from '../components/forms/ErrorMessage';
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText';
import AppFormField from '../components/forms/AppFormField';
import routes from "../navigation/routes";


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
}) 

function Login( {navigation} ) {

    

    return (
        
        <ImageBackground resizeMode="cover" style={styles.background} source={require ("../assets/background.jpg")}>
            <View style={styles.LoginContext}>
                <Formik
                    initialValues={{ email: '', password: ''}}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
            <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            onChangeText={handleChange("email")}
            onBlur={ () => setFieldTouched("email")}
            placeholder="Email"
            name="email"
            textContenType="emailAddress" />
        
            <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            onBlur={ () => setFieldTouched("password")}
            onChangeText={handleChange("password")}
            name="password"
            placeholder="Password"
            secureTextEntry

            textContenType="password" />

         

            <AppButton title="Login" color="secondary" onPress={handleSubmit}></AppButton>
                        </>
                    )}
                 </Formik>
            
            
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

            <TouchableOpacity onPress={() => navigation.navigate("Register")}> 
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