import React, {useContext, useState, Component} from 'react';
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
import icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import "firebase/firestore";

// import {AuthContext} from '../navigation/AuthProvider';

export class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp() {
        const { name, email, password } = this.state;
        const points = 0;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                    name, 
                    email,
                    points
                })
                console.log(result)
            })
            .catch((error) => {
                alert(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>

                {/* <Image
                source={require('../../assets/wallet.png')}
                style={styles.logo}
                /> */}

                <Text style={styles.text}>I WANT IT TOO !</Text>

                <FormInput
                // labelValue={email}
                onChangeText={(name) => this.setState({ name })}
                placeholderText="Name"
                iconType="user"
                autoCapitalize="none"
                autoCorrect={false}
                />

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
     
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By registering, you confirm that you accept our{' '}
                        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                                Terms of service{' '}
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.color_textPrivate}> and </Text>

                        <TouchableOpacity onPress={() => alert('Policy Clicked!')}>
                            <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>
                    </Text>
                </View>

                <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => this.props.navigation.navigate('Login')}>
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
//     const [name, setName] = useState();

//     return (
//         <View style={styles.container}>

//             <Text style={styles.text}>I WANT IT TOO !</Text>
            
//             <FormInput
//             labelValue={name}
//             onChangeText={(userName) => setName(userName)}
//             placeholderText="Name"
//             iconType="user"           
//             autoCorrect={false}
//             />

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
//             buttonTitle="Sign Up"
//             onPress={() => 
//                 email && password && name?firebase.auth().createUserWithEmailAndPassword(email, password)
//                 .then((result) =>{
//                     console.log('now signed up')
//                     firebase.auth().signInWithEmailAndPassword(email, password)
//                     .then((result) =>{
//                         console.log("now logged in")
//                     })
//                     .catch((error) =>{
//                         alert(error)
//                     })
//                 })
//                 .catch((error) =>{
//                     alert(error)
//                 }):alert("All the fields are required")
//             }
//             />

//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By registering, you confirm that you accept our{' '}
//                     <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
//                         <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
//                             Terms of service{' '}
//                         </Text>
//                     </TouchableOpacity>

//                     <Text style={styles.color_textPrivate}> and </Text>

//                     <TouchableOpacity onPress={() => alert('Policy Clicked!')}>
//                         <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
//                             Privacy Policy
//                         </Text>
//                     </TouchableOpacity>
//                 </Text>
//             </View>

//             {/* <SocialButton
//             buttonTitle="Sign Up with Google"
//             btnType="google"
//             color="#de4d41"
//             backgroundColor="#f5e7ea"
//             onPress={() => {}}
//             /> */}

//             <TouchableOpacity
//             style={styles.forgotButton}
//             onPress={() => navigation.navigate('Login')}>
//                 <Text style={styles.navButtonText}>
//                     {'\n'}Already have an account? Sign In
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
    text: {
    //   fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#b3804d',
    //   fontFamily: 'Lato-Regular',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 18,
      fontWeight: '400',
    //   fontFamily: 'Lato-Regular',
      color: 'grey',
    },
});

export default LoginScreen;