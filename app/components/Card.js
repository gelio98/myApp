import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import AppText from '../components/AppText'

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image resizeMode="center" source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white", 
        marginBottom: 20,
        overflow: 'hidden'
       
    }, 
    image: {
        width: "100%",
        height: 200
    },
    detailsContainer: {
        padding: 10
    }, 
    title: {
        marginBottom: 7,
        fontWeight: "bold"
    }, 
    subTitle: {
        
    }

})

export default Card;