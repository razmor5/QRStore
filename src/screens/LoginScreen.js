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

export class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential)
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
                source={require('../../assets/login.png')}
                style={styles.logo}
                />

                <Text style={styles.text}>LET ME IN !</Text>

                <FormInput
                // labelValue={email}
                onChangeText={(email) => this.setState({ email })}
                placeholderText="Email"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />

                <FormInput
                // labelValue={password}
                onChangeText={(password) => this.setState({ password })}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                />

                <FormButton
                buttonTitle="Sign In"
                onPress={() => this.onSignUp()}
                />
                
                <TouchableOpacity style={styles.forgotButton} onPress={() => this.props.navigation.navigate('Forgot')}>
                    <Text style={styles.navButtonText}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text style={styles.navButtonText}>
                        Don't have an acount? Create here
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

// const LoginScreen = ({navigation}) => {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//     var user;

//     return (
        // <View style={styles.container}>
//             <Image
//             source={require('../../assets/wallet.png')}
//             style={styles.logo}
//             />

//             <Text style={styles.text}>LET ME IN !</Text>
            
//             <FormInput
//             labelValue={email}
//             onChangeText={(userEmail) => setEmail(userEmail)}
//             placeholderText="Email"
//             iconType="mail"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoCorrect={false}
//             />

//             <FormInput
//             labelValue={password}
//             onChangeText={(userPassword) => setPassword(userPassword)}
//             placeholderText="Password"
//             iconType="lock"
//             secureTextEntry={true}
//             />

//             <FormButton
//             buttonTitle="Sign In"
//             onPress={() => firebase.auth().signInWithEmailAndPassword(email, password)
//                 .then((userCredential) => {
//                     user = userCredential.user;
//                     console.log("this is user:\n",user,"\n this is user credential:\n", userCredential);
//                 })
//                 .catch((error) => {
//                     user = null;
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     alert(errorMessage)
//                 })
//                 // .then(() => {user ? navigation.navigate("Home"):console.log("error")})
//             }
//             />

//             <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
//                 <Text style={styles.navButtonText}>Forgot Password?</Text>
//             </TouchableOpacity>

//             {/* <SocialButton
//             buttonTitle="Sign In with Google"
//             btnType="google"
//             color="#de4d41"
//             backgroundColor="#f5e7ea"
//             onPress={() => {firebase.auth().signInWithPopup(provider)
//                 .then((userCredential) => {
//                     user = userCredential.user;
//                     console.log(user);
//                 })
//                 .catch((error) => {
//                     user = null;
//                     var errorCode = error.code;
//                     var errorMessage = error.message;
//                     console.log(errorMessage)
//                 })
//             }}
//             /> */}

//             <TouchableOpacity
//             style={styles.forgotButton}
//             onPress={() => navigation.navigate('Signup')}>
//                 <Text style={styles.navButtonText}>
//                     Don't have an acount? Create here
//                 </Text>
//             </TouchableOpacity>



//         </View>
//     )
// };


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

export default LoginScreen;