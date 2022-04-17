import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from './AppText';
import ListItem from './ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>  
        <Image source={require("../assets/kitty-needs-love.png")} style={styles.image}/>
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Kitty</AppText>
            <AppText style={styles.subTitle}>big Kitty</AppText>

            <View style={styles.userContainer}>
            <ListItem 
            image={require("../assets/kitty-needs-love.png")}
            title="Usuario Generico"
            subTitle="5 incidencias"
            >

            </ListItem>
            </View>
            
        </View>
        </View>
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