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
import Header from "./components/header";
import TodoItem from "./components/todoitem";

const App = () => {

 const [todos, setTodos] = useState([
  { text: 'buy coffee beans', key: 1 },
  { text: 'create app', key: 2 },
  { text: 'play Nitendo Switch', key: 3 },
 ])

 const onPressHandler = (item)=>{
  alert(item.text)
}

  return(
    <View style={styles.container}>
        {/* header */}
        <Header/>
        <View style={styles.content}>
          {/* Form */}
          <View style={styles.list}>
              <FlatList
               data={todos}
               renderItem={(({item})=>(
               <TodoItem item={item} onPressHandler={onPressHandler} />
               ))}
              />
          </View>
        </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop: 20
  }
});
