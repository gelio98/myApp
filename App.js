import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from './app/screens/SplashScreen'
import Login from './app/screens/Login';





export default function App() {

  
  return (

    
    <Login>
    </Login>
    
  );
}


const styles = StyleSheet.create({
  centerAll: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
  iconStyle: {
    backgroundColor: "orange",
    alignItems: "flex-start",
    flex: 0.5
  },
});


