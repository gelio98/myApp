import React, { useState }  from "react";

import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Component } from "react";
import { Animated, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker } from "react-native-maps"


export default function AppMap(props) {

    const [ pin, setPin ] = React.useState({
          latitude: 38.375868,
          longitude: -0.491327
      })
      const [ region, setRegion ] = React.useState({
          latitude: 38.375868,
          longitude: -0.491327,
          latitudeDelta: 0.122,
          longitudeDelta: 0.0921
      })
  
    
    
    return (

        
        <MapView
                  style={styles.map}
                  initialRegion={{
                      latitude: 38.375868,
                      longitude: -0.491327,
                      latitudeDelta: 0.122,
                      longitudeDelta: 0.0921
                  }}
                  provider="google"
              >
                  <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                  <Marker
                      coordinate={pin}
                      pinColor="black"
                      draggable={true}
                      onDragStart={(e) => {
                          console.log("Drag start", e.nativeEvent.coordinates)
                      }}
                      onDragEnd={(e) => {
                          setPin({
                              latitude: e.nativeEvent.coordinate.latitude,
                              longitude: e.nativeEvent.coordinate.longitude
                          })
                      }}
                  >
                      <Callout>
                          <Text>I'm here</Text>
                      </Callout>
                  </Marker>
                  <Circle center={pin} radius={1000} />
              </MapView>
        
  
    );
  }

  var styles = StyleSheet.create({
    containermap: {
     
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: "100%",
      height: "100%",
  
    },
  
  
  });