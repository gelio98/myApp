import React, {useEffect} from 'react';
import { BackHandler , StyleSheet, View} from 'react-native';
import {Text} from 'react-native'

function Home(props) {

    
    return (
      <View style={styles.incidenceButton}></View>
    );
}

const styles = StyleSheet.create({
    incidenceButton: {
        backgroundColor: "blue",
        width: "10%",
        height: "10%",
        borderRadius: 50,
        position: "absolute",
        bottom: 50,
        marginLeft: "70%"
        
    }
    
  });

export default Home;