import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const AddTodo = ({ submitTodoHandler }) => {

    const [text, setText] = useState('')

    const changeHandler = (text) => {
        setText(text)
    }

    return ( 
        <View>
            <TextInput
                style={styles.input}
                placeholder='Type new todo'
                onChangeText={changeHandler}
             />
            {text.length > 0?  <Text>{text}</Text> : ''}
             <Button  color='#0d0735' title='Add Todo' onPress={()=>submitTodoHandler(text)} />
        </View>
     );
}
 
export default AddTodo;

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderColor: '#0d0735',
        borderWidth: 1,
        // borderBottomWidth: 2,
        borderRadius: 50,
    }
})