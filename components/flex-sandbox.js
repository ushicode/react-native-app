import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const FlexSandbox = () => {
    return ( 
        <View style={styles.container}>
            <View style={styles.box1} >
                <TextInput style={styles.searchBox} placeholder="Search box" />
                {/* <Text>Box 1, extra text</Text> */}
                </View>
            <View style={styles.box2} ><Text>Box 2</Text></View>
            <View style={styles.box3} ><Text>Box 3</Text></View>
            <View style={styles.box4} ><Text>Box 4</Text></View>
        </View>
     );
}
 
export default FlexSandbox;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems:'center',
        paddingTop: 100,
        backgroundColor: '#ddd',
    },
    box1: {
        flex: 4,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'stretch'
    },
    box2: {
        flex: 1,
        backgroundColor: 'cyan',
        padding: 10,
    },
    box3: {
        flex: 1,
        backgroundColor: 'orange',
        padding: 10,
    },
    box4: {
        flex: 1,
        backgroundColor: 'magenta',
        padding: 10,
    },
    searchBox:{
        // marginBottom: 10,
        paddingHorizontal: 10,
        // paddingVertical: 8,
        borderColor: '#fff',
        borderWidth: 1,
        // borderBottomWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white',
      
    }
})