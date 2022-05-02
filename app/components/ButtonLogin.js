import React from "react"
import { StyleSheet, Text, TouchableOpacity , Image} from "react-native"

import colors from "../config/colors"



const AppButtonLogin = ({ title, onPress}) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.5}
        >


        <Image
                 source={require("../assets/huella.png")} style={styles.imageIconStyle1}
         ></Image>

          <Text style={styles.text}>{title}</Text>

         <Image
                 source={require("../assets/huella.png")} style={styles.imageIconStyle2}
         ></Image>
           
        </TouchableOpacity>
    )
}

export default AppButtonLogin

const styles = StyleSheet.create({
    button: {
        
        flexDirection: "row",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
        marginVertical: 10,
        backgroundColor: colors.green,
        borderColor: "black"
        
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: "bold",
        textAlign: "center",
    },
    imageIconStyle1: {
        padding: 10,
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignSelf: "center",
        position: "absolute",
        left: "7%"
      },

      imageIconStyle2: {
        padding: 10,
        //marginLeft: "60%",
        height: 25,
        width: 25,
        resizeMode: "stretch",
        alignSelf: "center",
        position: "absolute",
        left: "85%"
      }
})
