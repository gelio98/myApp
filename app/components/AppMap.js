import React, { useState }  from "react";

import { ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { Component } from "react";
import { Animated, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker } from "react-native-maps"


export default function AppMap() {

    const [ pin, setPin ] = React.useState({
          latitude: 37.78825,
          longitude: -122.4324
      })
      const [ region, setRegion ] = React.useState({
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
      })
  
    
    
    return (
  <View style={styles.containermap}>
        <MapView
                  style={styles.map}
                  initialRegion={{
                      latitude: 37.78825,
                      longitude: -122.4324,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
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
          </View>
     
  
    );
  }

  var styles = StyleSheet.create({
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