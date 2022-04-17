import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, ScrollViewComponent} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SplashScreen from './app/screens/SplashScreen'
import Login from './app/screens/Login';
import Card from './app/components/Card';




export default function App() {

  
  return (
   
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

   
    /*
    <Login> 
    </Login>
    */
    
  );
}


const styles = StyleSheet.create({
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
});


