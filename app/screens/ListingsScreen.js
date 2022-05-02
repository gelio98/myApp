import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [{
    id: 1,
    tittle: 'Kitty',
    description: 'This kitty searchs for love',
    image: require("../assets/kitty-needs-love.png")
}, 

{
    id: 2,
    tittle: 'Kitty2',
    description: 'This kitty2 searchs for love',
    image: require("../assets/kitty-needs-love.png")
},
{
    id: 3,
    tittle: 'Kitty3',
    description: 'This kitty3 searchs for love',
    image: require("../assets/kitty-needs-love.png")
}, 

{
    id: 4,
    tittle: 'Kitty4',
    description: 'This kitty4 searchs for love',
    image: require("../assets/kitty-needs-love.png")
}



];

function ListingsScreen(props) {
    return (
       <Screen style={styles.screen}>
           <FlatList
           data={listings}
           keyExtractor={listings => listings.id.toString()}
           renderItem={ ({ item }) =>
            <Card
            title = {item.tittle}
            subTitle = {item.description}
            image = {item.image}
            />
            }
           />
           
       </Screen>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({

    screen: {
        paddingHorizontal: "2%",
        backgroundColor: colors.light
    }
    
})