import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const Header = () => {
    return ( 
        <View style={styles.header} >
            <Text style={styles.title}>My Todos</Text>
        </View>
     );
}
 
export default Header;

const styles = StyleSheet.create({
    header:{
        height: 80,
        paddingTop: 38,
        backgroundColor: '#fffc00'
    },
    title:{
        textAlign: 'center',
        color: '#0d0735',
        fontSize: 20,
        fontWeight: 'bold'
    }

})