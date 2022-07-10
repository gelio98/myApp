import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppMap from '../components/AppMap';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';

function ListingDetailsScreen( {route }) {

    const listing = route.params 

    return (
        <Screen>  
            
        <Image source={{ uri: listing.imgURL}}  style={styles.image}/>
        
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.subTitle}>{listing.description}</AppText>
            <View  styles={styles.map}>
           
            </View>
          
        
            <View style={styles.userContainer}>
           
          
            <ListItem 
            image={require("../assets/kitty-needs-love.png")}
            title= {listing.userEmail}
            subTitle="5 incidencias"
            >
            </ListItem>
            <AppMap></AppMap>
            </View>
          
        </View>

        
        </Screen>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 10,
        
    }, 

    title: {
        marginBottom: 7,
        fontWeight: "bold",
        fontSize: 30,
        fontWeight: "500"
    }, 
    subTitle: {
        marginVertical: 10
    }, 
    userContainer: {
    },
    map: {
        alignContent: "center",
        width: "100%",
        height: "100%",
      }
})