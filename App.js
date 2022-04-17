import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ScrollViewComponent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from './app/screens/SplashScreen'
import Login from './app/screens/Login';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';




export default function App() {

  
  return (
   
    <View style={styles.container}> 
      <ListingDetailsScreen></ListingDetailsScreen>
    </View>

   
    /*
    <Login> 
    </Login>
    */
    
  );
}


const styles = StyleSheet.create({
  container: {
		backgroundColor: 'red',
		//padding: "2%",
    paddingTop: "20%"

	},
  iconStyle: {
    backgroundColor: "orange",
    alignItems: "flex-start",
    flex: 0.5
  },
});


