import * as React from 'react';
//import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListingsScreen from "../screens/ListingsScreen";
import LoginScreen from "../screens/Login";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
   
    <Drawer.Navigator >
       <Drawer.Screen name="Home" component={ListingsScreen} options={{ headerShown: false}}  />
       <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />   
    </Drawer.Navigator>
  
  );
  
  export default DrawerNavigator;