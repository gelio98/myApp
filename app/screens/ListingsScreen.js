import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import Header from '../components/Header';


const listings = [{
    id: 1,
    tittle: 'Kitty',
    description: 'This kitty searchs for love',
    image: require("../assets/kitty-needs-love.png")
}, 

{
    id: 2,
    tittle: 'Kitty2 his kitty2 searchs for love jahdahdaduuasdhiugfeugiyegyiegriyegtyegtegrouterhtnerthos',
    description: 'This kitty2 searchs for love jahdahdaduuasdhiugfeugiyegyiegriyegtyegtegrouterhtnerthouehtrethuoerhtenutuguqiy',
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

const scrollY = new Animated.Value(0)
const diffClamp = Animated.diffClamp(scrollY,0,45)
const translateY = diffClamp.interpolate({
  inputRange:[0,40],
  outputRange:[0,-40]
})

function ListingsScreen( {navigation} ) {
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

    <TouchableOpacity
        style={styles.roundButton1}
        onPress={() => navigation.navigate(routes.LISTING_EDIT)} >
        <MaterialCommunityIcons 
        style={styles.rotate90}
        size={40}
        name="paw" />
      </TouchableOpacity>
           
       </Screen>
    );
}

export default ListingsScreen;

const styles = StyleSheet.create({

    screen: {
        paddingHorizontal: "2%",
        backgroundColor: colors.light
    }, 
    roundButton1: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: colors.green,
        position: 'absolute',
        left: "75%",
        top: "85%"
      },
      rotate90: {
        transform: [{ rotate: '45deg' }],
        
      }
    
})