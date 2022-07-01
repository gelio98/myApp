import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function ListingDetailsScreen( {route }) {

    const listing = route.params 

    return (
        <SafeAreaView>  
        <Image source={listing.image} style={styles.image}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{listing.title}</AppText>
            <AppText style={styles.subTitle}>{listing.description}</AppText>

            <View style={styles.userContainer}>
            <ListItem 
            image={require("../assets/kitty-needs-love.png")}
            title="Usuario Generico"
            subTitle="5 incidencias"
            >

            </ListItem>
            </View>
            
        </View>
        </SafeAreaView>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300
    },
    detailsContainer: {
        padding: 10
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
        marginVertical: 50
    }
})