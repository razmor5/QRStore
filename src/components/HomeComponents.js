import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Image} from 'react-native';

const HomeComponents = ({ imageSource, title, onClick}) => {
    return (
        <View style = {styles.container}>
            <Text style={styles.textstyle}>{title}</Text>
            <TouchableOpacity  onPress = {() => onClick()}>
                <Image style = {styles.imageStyle} source = {imageSource}/>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    textstyle:{
        fontSize: 45,
        marginHorizontal: 10,
        // marginLeft:20,
        backgroundColor: 'rgba(200,200,200,0.5)',
        fontWeight: 'bold',
    },
    imageStyle:{
        width: 150,
        height: 150,
        resizeMode: 'stretch',
        // marginHorizontal: 420,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'rgba(200,200,200,0.5)'
    },
    container: {
        flex: 1,
        // // backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
});

export default HomeComponents;