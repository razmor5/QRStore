import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>Hi there</Text>
    const name = 'Raz'
    return (
        <View>
            <Text style= {{fontSize: 45}} >Getting started with react native!</Text>
            {/* {greeting} */}
            <Text style= {{fontSize:20}}>My name is {name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;