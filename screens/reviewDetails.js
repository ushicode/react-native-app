import { React } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const ReviewDetails = () => {
    return (
        <View style={styles.container}>
            <Text>Review Detail</Text>
        </View>
    );
}
 
export default ReviewDetails;

const styles = StyleSheet.create({
    container:{
        padding: 22
    }
})