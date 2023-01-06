import { React } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const Home = () => {
    return (
        <View style={globalStyles.container}>
        <Text>Home Screen</Text>
       
        </View>
    );
}
 
export default Home;

const styles = StyleSheet.create({
    container:{
        padding: 24
    }
})