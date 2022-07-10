import React, { useState , useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { FacebookSocialButton } from "react-native-social-buttons";
import AppTextInput from "../components/TextInput"
import AppButton from "../components/ButtonLogin"
import ErrorMessage from '../components/forms/ErrorMessage';
import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText';
import routes from "../navigation/routes";
import { auth, user } from "../api/firebase"
import { useNavigation } from '@react-navigation/native';
import * as GoogleSignIn from 'expo-google-sign-in';

import {
    AppForm as Form,
    AppFormField as AppFormField,
    AppFormPicker as Picker,
    SubmitButton,
  } from "../components/forms";
import { async } from '@firebase/util';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password")
}) 

function Login( {navigation} ) {

 

  _syncUserWithStateAsync = async () => {
    user = GoogleSignIn.getCurrentUser()
  };

  signOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    user = null
  };

  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, userGoogle } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        this._syncUserWithStateAsync();
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  onPress = () => {
    if (user) {
      this.signOutAsync();
    } else {
      this.signInAsync();
    }
  };

  googleLoogin = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, userGoogle } = await GoogleSignIn.signInAsync();
      //user = userGoogle //userGoogle.email
      if (type === 'success') {
        let userTemp = GoogleSignIn.getCurrentUser()
        auth
      .createUserWithEmailAndPassword(userTemp.email, userTemp.uid)
      .then(userCredentials => {
         user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(auth
        .signInWithEmailAndPassword(userTemp.email, userTemp.uid)
        .then(userCredentials => {
          user = userCredentials.user;
          console.log('Logged in with:', user.email);
        })
        .catch())
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  }
        
  




    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            navigation.navigate("Home")
          }
        })
    
        return unsubscribe
      }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            user = userCredentials.user;
            console.log('Logged in with:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return (
        
        <ImageBackground resizeMode="cover" style={styles.background} source={require ("../assets/background.jpg")}>
            <View style={styles.LoginContext}>
                <Formik
                    initialValues={{ email: '', password: ''}}
                    onSubmit={values =>  auth
                        .signInWithEmailAndPassword(values.email, values.password)
                        .then(userCredentials => {
                          const user = userCredentials.user;
                          console.log('Logged in with:', user.email);
                        })
                        .catch(error => alert(error.message))}
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

         

            <SubmitButton title="Login" color="secondary" onPress={handleSubmit}></SubmitButton>
                        </>
                    )}
                 </Formik>
            
            
            </View>

            <TouchableOpacity onPress={googleLoogin}> 
            <View style={styles.loginButtonGoogle}> 
            <Image
                 source={require("../assets/google-plus.png")} style={styles.imageIconStyle}
         ></Image>
            <Text style={styles.textStyle}> Sign In with Google </Text>
            </View> 
            </TouchableOpacity>

            <TouchableOpacity > 
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
            <Text style={styles.textStyle}> ¿No tienes cuenta? Únete a nosotros </Text>
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