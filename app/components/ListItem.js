import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';
import AppText from '../components/AppText'

function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
       
    }, 
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "bold"
    }, 
    subTitle: {
        color: "#6e6969"
    }

})

export default ListItem;