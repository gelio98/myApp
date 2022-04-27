import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ScrollViewComponent} from 'react-native';
import Icon from './app/components/Icon';
import SplashScreen from './app/screens/SplashScreen'
import Login from './app/screens/Login';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';




export default function App() {

  
  return (

  
     <ListingsScreen></ListingsScreen>
  
   
   

    /*
    <View style={styles.container}> 
  <ScrollView> 
      <Card 
      title="Kitty"
      subTitle="I'm a cute kitty meow meow I'm a cute kitty meow meowI'm a cute kitty meow meowI'm a cute kitty meow meowI'm a cute kitty meow meow"
      image={require("./app/assets/kitty-needs-love.png")}>
      </Card> 

      <Card 
      title="Kitty"
      subTitle="I'm a cute kitty meow meow"
      image={require("./app/assets/kitty-needs-love.png")}>
      </Card> 

      <Card 
      title="Kitty"
      subTitle="I'm a cute kitty meow meow"
      image={require("./app/assets/kitty-needs-love.png")}>
      </Card> 

      </ScrollView> 
    </View>

    */
   
    /*
    <Login> 
    </Login>
    */
    
  );
}


const styles = StyleSheet.create({

  /*
  container: {
		backgroundColor: 'red',
		padding: "2%",
    paddingTop: "20%"

	},
  iconStyle: {
    backgroundColor: "orange",
    alignItems: "flex-start",
    flex: 0.5
  },
  */
});

