import React from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

const ImageDetail = (porps) =>{
    console.log(porps)
    return (
        <View>
            <TouchableOpacity >

            <Image style = {styles.imageStyle} source = {porps.imageSource}/>
            </TouchableOpacity>
            <Text style = {styles.textStyle}>
                {porps.title}
            </Text>

        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    imageStyle: {
        width: 150,
        height: 150,
        resizeMode: 'stretch',
    }
});

export default ImageDetail;
