import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function index(props) {
    return (
           <Stack.Navigator screenOptions={{ headerShown: false}}>
               <Stack.Screen name="SplashScreen" component={SplashScreen} ></Stack.Screen>
               <Stack.Screen name="Home" component={Home} ></Stack.Screen>
           </Stack.Navigator>
    );
}

export default index;