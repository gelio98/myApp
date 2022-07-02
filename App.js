import React, { useState }  from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Login from "./app/screens/Login";
import ListingEditScreen from "./app/components/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from './app/screens/MessagesScreen'
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Component } from "react";
import { Animated, Dimensions } from 'react-native';
import Header from "./app/components/Header";
import {Provider,useSelector} from 'react-redux'
import ListingsScreen from "./app/screens/ListingsScreen";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthScreen from "./prueba";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import AppMap from "./app/components/AppMap";


//import rootReducer from './reducers'
//import {configureStore,combineReducers} from 'redux'

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

class MyAwesomeComponent extends Component {

  constructor(props) {
    super(props);
    this.height = new Animated.Value(100);
  }

  _setAnimation(enable) {
    Animated.timing(this.height, {
      duration: 400,
      toValue: enable? 100 : 0
    }).start()
  } 

  render() {
    return (
      <Animated.View style={{ height: this.height, backgroundColor: "yellow" }}/>
    );
 }

}

//const store = configureStore(rootReducer)


export default function App() {

  
  
  return (

   <AppMap></AppMap>


    /*
    
    <NavigationContainer>
  <AppNavigator> </AppNavigator>
    
    </NavigationContainer>
  
*/
    /*
 <View style={styles.container}>
 <AuthScreen></AuthScreen>
 </View>
 
   */
   
    
    
    /*
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
     
      
  */
  );
}

var styles = StyleSheet.create({

  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
  },

  topBox: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
  },
  headline: {
      fontWeight: 'bold',
      fontSize: 18,
  marginTop: 0,
      width: 200,
      height: 80,
  backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
  },

otherContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
  backgroundColor: 'green',
  },
  containermap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: "50%",
    height: "50%",
  },


});