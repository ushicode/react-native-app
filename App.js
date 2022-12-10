import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";

const App = () => {
  const [cars, setCar] = useState([
    {
      color: "purple",
      type: "Minivan",
      registration: new Date("2017-01-03"),
      capacity: 7,
    },
    {
      color: "red",
      type: "Station Wagon",
      registration: new Date("2020-07-21"),
      capacity: 5,
    },
    {
      color: "orange",
      type: "Sienna",
      registration: new Date("2019-03-10"),
      capacity: 6,
    },
    {
      color: "Navy Blue",
      type: "Truck",
      registration: new Date("2021-11-10"),
      capacity: 2,
    },
    {
      color: "Purple",
      type: "Bus",
      registration: new Date("2018-03-03"),
      capacity: 8,
    },
    {
      color: "orange",
      type: "Volkswagon",
      registration: new Date("2019-03-10"),
      capacity: 10,
    },
    {
      color: "Navy Blue",
      type: "Honda",
      registration: new Date("2021-11-10"),
      capacity: 12,
    },
    {
      color: "Purple",
      type: "Bike",
      registration: new Date("2018-03-03"),
      capacity: 9,
    },

    {
      color: "Navy Blue",
      type: "Honda",
      registration: new Date("2021-11-10"),
      capacity: 32,
    },
    {
      color: "Purple",
      type: "Bike",
      registration: new Date("2018-03-03"),
      capacity: 19,
    },
  ]);


  const pressHandler = (id) => {
    alert(id);
  }


  return (
    // Using FlatList
      <FlatList 
      numColumns={2}
      keyExtractor={(item)=> item.capacity}
      data={cars}
      renderItem={(({item})=>{
       return(
        <TouchableOpacity style={{ border:1 }} onPress={()=>{pressHandler(item.capacity)}}>
          <Text style={styles.item}>
          {item.type}
         </Text>
        </TouchableOpacity>
       )
      })}
      />
     
    // Using loops
    // <ScrollView>
    //   <View style={styles.container}>
    //     {cars.map((car) => (
    //       <View key={car.capacity} style={styles.item}>
    //         <Text>{car.type}</Text>
    //         <Text>{car.color}</Text>
    //       </View>
    //     ))}
    //   </View>
    // </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 20,
    backgroundColor: "orange",
    fontSize: 24,
    borderRadius: 8,
    marginHorizontal: 5,
    
  },
});
