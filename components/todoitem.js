import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const TodoItem = (props) => {
  const {item, onPressHandler} = props

  

    return ( 
      <TouchableOpacity onPress={()=>onPressHandler(item.key)}>
        <View style={styles.item}>
          <MaterialIcons  name="delete" size={24} color='red'/>
        <Text style={styles.itemText}>{item.text}</Text>
        </View>
        
      </TouchableOpacity>
     );
}
 
export default TodoItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderColor: '#0d0735',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,

  },
  itemText: {
    marginLeft: 10,
    color: 'grey'
  }
})