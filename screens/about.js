import { React } from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
