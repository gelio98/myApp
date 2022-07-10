import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../components/screens/ListingEditScreen";
import DrawerNavigator from "./DrawerNavigator";
import ListingDetailsScreen from "../screens/ListingDetailsScreen"


const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false}} /> 
    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}} /> 
    <Stack.Screen name="ListingEdit" component={ListingEditScreen} options={{ headerShown: false}} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} options={{ headerShown: false}} />
    
  </Stack.Navigator>
);

export default AppNavigator;