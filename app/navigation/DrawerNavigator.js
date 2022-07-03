
import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from "react";
//import { Button, View } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListingsScreen from "../screens/ListingsScreen";
import LoginScreen from "../screens/Login";
import { auth, user } from "../api/firebase"
import { Button } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';


import {
   createDrawerNavigator,
   DrawerContentScrollView,
   DrawerItemList,
   DrawerItem,
 } from '@react-navigation/drawer';
import { exp, useAnimatedGestureHandler } from 'react-native-reanimated';
import { render } from 'react-dom';
import ListingsScreenAdoption from '../screens/ListingsScreensAdoption';



 

const Drawer = createDrawerNavigator();


function DrawerNavigator({navigation}){
  const [logged, setLogged] = useState(false)
 
  function CustomDrawerContent(props) {

   
    
    const handleSignOut = () => {
      auth
        .signOut()
        .then(() => {
          console.log("out")
          setLogged(false)
        
        })
        .catch(error => alert(error.message))
    }
    
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
         setLogged(true)
        }
      })
    
      return unsubscribe
    }, [])

    useEffect(() => {
      const unsubscribe = GoogleSignIn.isConnectedAsync(user => {

        if (user) {
         setLogged(true)
        }
      })
    
      return unsubscribe
    }, [])
    
       return (
         
         <DrawerContentScrollView {...props}>
           <DrawerItemList {...props} />
    
           {logged === true ?(<DrawerItem label="Sign Out" onPress={handleSignOut} />) : ( <></> ) }
          
         </DrawerContentScrollView>
       );
     }
  
  
   return ( 
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
         <Drawer.Screen name="Home" component={ListingsScreen} options={{ headerShown: false}}  />
         <Drawer.Screen name="Adopciones" component={ListingsScreenAdoption} options={{ headerShown: false}}  />
       {logged === false ? (<Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />) : (<></> )}
      </Drawer.Navigator>
    
    );

}


  
  export default DrawerNavigator;

  