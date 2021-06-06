import React, {useContext, useState, Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import firebase from 'firebase';

export class ForgotScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }

        this.onReset = this.onReset.bind(this)
    }

    onReset() {
        const { email, password } = this.state;
        firebase.auth().sendPasswordResetEmail(email)
            .then((userCredential) => {
                console.log(userCredential)
                alert('Your Password Has Been Reset\nGo Check Your Email')
                this.props.navigation.replace('Login')
                // this.props.navigation.navigate('Home');
            })
            .catch((error) => {
                alert(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>

                <Image
                source={require('../../assets/password.png')}
                style={styles.logo}
                />

                <Text style={styles.text}>Do not worry, your wallet is safe with us!</Text>

                <FormInput
                // labelValue={email}
                onChangeText={(email) => this.setState({ email })}
                placeholderText="Email"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />

                <FormButton
                buttonTitle="Reset Password"
                onPress={() => this.onReset()}
                />

                <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.navButtonText}>
                        Back To Login
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3d3c8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#b3804d',
        // fontFamily: 'Lato-Regular',
    },
});

export default ForgotScreen;