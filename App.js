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
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addTodo";
import FlexSandbox from "./components/flex-sandbox";

const App = () => {

 const [todos, setTodos] = useState([
  { text: 'buy coffee beans', key: 1 },
  { text: 'create app', key: 2 },
  { text: 'play Nitendo Switch', key: 3 },
 ])

 const onPressHandler = (key)=>{
  setTodos(((prevTodos)=>{
    return prevTodos.filter(todo => todo.key != key)
  }))
}

const submitTodoHandler = (text) => {
  if(text.length < 3) return Alert.alert('Oops!', 'Character length too short', [ {text: 'Understood', onPress: ()=> alert('ALERT CLOSED'),  style: "cancel" }]) 
  setTodos((prevTodos)=>{
    return [
      {text: text, id: Math.random().toString()},
      ...prevTodos
    ]
  })
  alert(JSON.stringify(todos, null, 1))
}

  return(
      <FlexSandbox/>
    
    // TouchableWithoutFeedback will listen to touch events on the screen
    // - Dismiss keyboard to close the keyboard when TouchableWithoutFeedback is active

  //  <TouchableWithoutFeedback onPress={()=>{ Keyboard.dismiss()}}>
  //    <View style={styles.container}>
  //       {/* header */}
  //       <Header/>
  //       <View style={styles.content}>
          
  //         <AddTodo submitTodoHandler={submitTodoHandler}/>


  //         <View style={styles.list}>
  //             <FlatList
  //              data={todos}
  //              renderItem={(({item})=>(
  //              <TodoItem item={item} onPressHandler={onPressHandler} />
  //              ))}
  //             />
  //         </View>
  //       </View>
  //   </View>
  //  </TouchableWithoutFeedback>
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
