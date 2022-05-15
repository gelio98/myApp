import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../components/screens/ListingEditScreen";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false}} /> 
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/>
    <Stack.Screen name="ListingEdit" component={ListingEditScreen} options={{ headerShown: false}}/>
  </Stack.Navigator>
);

export default AuthNavigator;