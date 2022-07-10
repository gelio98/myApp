import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AppText from '../components/AppText'

function Card({ title, description, image, onPress, onLongPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress} onLongPress={onLongPress}> 
        <View style={styles.card}>
            <Image resizeMode="cover" source={{ uri: image}} style={styles.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1} >{title} </AppText>
            <AppText style={styles.subTitle} numberOfLines={4}>{description} </AppText>
            </View>
        </View>
        </TouchableWithoutFeedback>
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