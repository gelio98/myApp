import React, { useState } from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Login from "./app/screens/Login";
import ListingEditScreen from "./app/components/screens/ListingEditScreen";
import ListItem from "./app/components/ListItem";
import MessagesScreen from './app/screens/MessagesScreen'
const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    
     <ListingEditScreen> </ListingEditScreen>
      
  
  );
}