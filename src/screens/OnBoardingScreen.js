import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {windowHeight, windowWidth} from '../../Dimensions';

const OnBoardingScreen = ({navigation}) =>{
    // console.log({navigation})
    return (
        <Onboarding
        onSkip={()=>navigation.navigate('Login')}
        onDone={()=>navigation.navigate('Login')}
        pages={[
            {
                backgroundColor: '#c8e3dd',
                image: <Image style = {[styles.imgstyle]} source={require('../../assets/step1.png')} />,
                title: 'Scan Your Receipt',
                subtitle: 'Is That Simple!',
            },
            {
                backgroundColor: '#dec8e3',
                image: <Image style = {[styles.imgstyle]} source={require('../../assets/step2.png')} />,
                title: 'Fill Your Bag',
                subtitle: 'One More Step',
            },
            {
                backgroundColor: '#f5d6b0',
                image: <Image style = {[styles.imgstyle]} source={require('../../assets/step3.png')} />,
                title: 'Pay With Points',
                subtitle: 'Save Your Money!',
            },
        ]}
        />
        
    )
};

const styles = StyleSheet.create({
    imgstyle:{
        width: windowHeight/3,
        height: windowHeight/3,
        resizeMode: 'stretch',
    },
});

export default OnBoardingScreen;