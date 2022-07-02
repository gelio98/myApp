import { useState } from 'react';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'
import AppText from '../components/AppText';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../navigation/routes";
import Header from '../components/Header';
import listingsApi from '../api/listings';
import { object } from 'yup/lib/locale';
import AppButton from '../components/AppButton';
import { fetchLatestIncidencias, db } from "../api/firebase"




const listingConst = [{
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



function ListingsScreen( {navigation} ) {

    const [listings, setListings] = useState();
    const [error , setError] = useState();
    const [loading , setLoading] = useState();

    useEffect(() => {
        loadListings()
    }, []);

    React.useEffect(
        () => navigation.addListener('focus', () => loadListings()),
        []
      );

    const loadListings =  async () => {
        setLoading(true)
       // const response = await listingsApi.getListings();
       //const response = fetchLatestIncidencias();

       db.collection("incidencia").onSnapshot((querySnapshot) => {
   
        const listings = [];
        querySnapshot.docs.forEach((doc) => {
           
           listings.push(doc.data())
        })

        console.log(listings)
        setListings(listings);
          })

        setLoading(false)
       

        setError(false)
        setListings(listings);
        console.log("voy a enseñar completo")
        console.log(listings)

        
        let item =  Object.keys(listings).map( function (key) {
          return listings[key]
       }
           
        )
        console.log("show item")
        console.log(item)

        setListings(item);
        
    
    }

    return (

      
      
       <Screen style={styles.screen}>

           { error && (
               <>
                <AppText> Couldnt get the list</AppText>
                <AppButton title="Retry" onPress={loadListings}> </AppButton>
               </>
           )}

        <ActivityIndicator animating={loading} size="large" />
       
           <FlatList
           data={listings}
           keyExtractor={listings => listings.id.toString()}
           renderItem={ ({ item }) =>
            <Card
            title = {item.title}
            description = {item.description}
            image = {item.imgURL}
            onPress={() => navigation.navigate("ListingDetails", item )}
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