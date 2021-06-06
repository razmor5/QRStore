import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity, Button} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + action.payload}
        case 'decrement':
            return {...state, counter: state.counter - action.payload}
        default:
            return state;
    }
};

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});
    return (
        <View>
            <Button title = "Increase" onPress={()=>{
                dispatch({type: "increment", payload: 1})
                }}/>
            <Button title = "Deccrease" onPress={()=>{
                dispatch({type: "decrement", payload: 1})
            }}/>
            <Text style = {styles.textStyle}>
                {state.counter}
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

export default CounterScreen;