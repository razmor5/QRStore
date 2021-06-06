import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import HomeComponents from '../components/HomeComponents';

const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <Text style = {styles.textstyle} >Find some stores around: </Text>
            <TextInput 
                style = {styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {name}
                onChangeText = { (newValue) => setName(newValue)}
            />
            <Text style = {styles.textstyle} >
                Search for: {name}
            </Text>
            <HomeComponents title="" imageSource = {require('../../assets/search.png')} onClick={()=>{console.log('Searching')}} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 25,
        fontSize: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5
    },
    textstyle: {
        fontSize: 45,
    },
    
});

export default TextScreen;