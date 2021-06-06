import React , { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const ColorCounter = ({ color , onIncrease, onDecrease}) => {
    return (
        <View>
            <Text style={styles.textstyle}>{color}</Text>
            <Button title = {`Increase ${color}`} onPress = {() => onIncrease()}/>
            <Button title = {`Decreade ${color}`} onPress = {() => onDecrease()}/>
        </View>
    )
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 30
    }
});

export default ColorCounter;