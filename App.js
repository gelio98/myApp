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
import { Component } from "react";
import { Animated } from 'react-native';
import Header from "./app/components/Header";
import {Provider,useSelector} from 'react-redux'
import ListingsScreen from "./app/screens/ListingsScreen";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import AppNavigator from "./app/navigation/AppNavigator";

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
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove =  uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }
  
  return (

    <NavigationContainer>
  <AppNavigator> </AppNavigator>
    
    </NavigationContainer>
  
   
    
    
    /*
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
     
      
  */
  );
}