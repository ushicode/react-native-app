import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const App = ()=> {

const [person, setPerson] = useState({name: 'Collins', age: 18})

  const clickHandler = () => {
    
    setPerson({name: 'Kiyie', age: 19})
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>User: {person.name} is {person.age} old</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.boldText}>What is React native</Text>
        <Text>
          React is a framework and a library for interacting with data and data
          management. React is used for a wide variety of types of tasks, from
          the UI to state management, to data management. Why is React cool? React is
          the first React framework, it is the first framework that can create
          high performance, robust and complete services that are in short
          supply in the most difficult scenarios. A framework can be created
          because its developer community could help define and test it.
        </Text>
      </View>

      <View style={styles.buttonContainer}><Button onPress={()=>{clickHandler()}} title='Update user name'/></View>
    </View>
  );
}

export default  App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#f1632a",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#f3f4f7",
    padding: 20,
  },
  buttonContainer:{
    borderRadius: 50,
    padding: 20,
    borderColor: '#f3f4f7',
   
  }
});

/* <Text>Medium List</Text>
      <StatusBar style="auto" /> */
