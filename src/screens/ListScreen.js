import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name:'friend 1', age: 21}, 
        {name:'friend 2', age: 25}, 
        {name:'friend 3', age: 34}, 
        {name:'friend 4', age: 54}, 
        {name:'friend 5', age: 66}, 
        {name:'friend 6', age: 36}, 
        {name:'friend 7', age: 21}, 
        {name:'friend 8', age: 19}, 
        {name:'friend 9', age: 20}, 
    ];

    return (
        <FlatList
            keyExtractor = {friend => friend.name}
            data = {friends}
            renderItem = {({item})=>{
                return <Text style = {styles.textstyle}>{item.name} - Age {item.age}</Text>;
            }}
        />
    );
}

const styles = StyleSheet.create({
    liststyle: {
        fontSize:45
    },
    textstyle: {
        marginBottom: 50
    }
})

export default ListScreen;