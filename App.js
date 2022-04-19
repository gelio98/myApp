import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ScrollViewComponent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from './app/screens/SplashScreen'
import Login from './app/screens/Login';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';




export default function App() {

  
  return (
   
    
      <View>
        <Card
      image={require("./app/assets/kitty-needs-love.png")}
      title="hola"
      subTitle="gatito"></Card> 
      </View>
      
    

   
    /*
    <Login> 
    </Login>
    */
    
  );
}


const styles = StyleSheet.create({
  container: {
	//	backgroundColor: 'white',
		//padding: "2%",
    //paddingTop: "20%"
    flex: 1

  }
});


