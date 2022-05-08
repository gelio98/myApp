import React, { useState } from "react";

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
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

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
      <AuthNavigator />
    </NavigationContainer>
     
      
  
  );
}