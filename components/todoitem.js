import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TodoItem = (props) => {
  const {item, onPressHandler} = props

  

    return ( 
      <TouchableOpacity onPress={()=>onPressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
     );
}
 
export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#0d0735',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10

  }
})