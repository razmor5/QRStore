import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () =>{
    // console.log({navigation})
    return (
        <View>
            <ImageDetail title="My Wallet" imageSource = {require('../../assets/wallet.png')} />
            <ImageDetail title="Stores" imageSource = {require('../../assets/tag.png')} />
            <ImageDetail title="Scan a code" imageSource = {require('../../assets/photo-camera.png')} />
        </View>
        
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ImageScreen;
