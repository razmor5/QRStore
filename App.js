import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import ScanScreen from "./src/screens/ScanScreen";
import ForgotScreen from "./src/screens/ForgotScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import WalletScreen from './src/screens/WalletScreen';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const store = createStore(rootReducer, applyMiddleware(thunk))

// import AsyncStorage from '@react-native-community/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDBlx9fabAErZuMoiQI4vpJZs1C0ROiQIk",
  authDomain: "qrsore.firebaseapp.com",
  projectId: "qrsore",
  storageBucket: "qrsore.appspot.com",
  messagingSenderId: "969419068291",
  appId: "1:969419068291:web:b2700a48417181c7aedcb6",
  measurementId: "G-SPXESGEYC6"
};

!firebase.apps.length?firebase.initializeApp(firebaseConfig):firebase.app();

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();
const AppTab = createMaterialBottomTabNavigator();
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }
  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      !user?this.setState({
        loggedIn:false,
        loaded:true,
      }):this.setState({
        loggedIn:true,
        loaded:true,
      })
    })
  }
  render(){
    const {loggedIn, loaded} = this.state;
    if(!loaded){
        return(
            <View>
              <Text>Loading...</Text>
            </View>
        )  
    }
    if(!loggedIn){
      return(
        <NavigationContainer>
          <AppStack.Navigator initialRouteName="OnBoarding" headerMode = 'none'>
            <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <AppStack.Screen name="Login" component={LoginScreen} />
            <AppStack.Screen name="Signup" component={SignupScreen} />  
            <AppStack.Screen name="Forgot" component={ForgotScreen} />  
          </AppStack.Navigator>
        </NavigationContainer>
        )
      }
      return(
        <Provider store={store}>
          <NavigationContainer>
            <AppTab.Navigator initialRouteName="Home" headerMode = 'none' >
              <AppTab.Screen name="Home" component={HomeScreen} 
              options = {{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name = "home" color={color} size={23} />
                ),
              }}
              />
              <AppTab.Screen name="Scan" component={ScanScreen}
              options = {{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name = "qrcode-scan" color={color} size={23} />
                ),
              }}
              />
              <AppTab.Screen name="My Wallet" component={WalletScreen} 
              options = {{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name = "wallet" color={color} size={23} />
                ),
              }}
              />
              <AppTab.Screen name="Log Out" component={ComponentsScreen} 
              listeners = {({navigation}) => ({
                tabPress: event =>{
                  event.preventDefault();
                  firebase.auth().signOut()
                }
              })
              }
              options = {{
                tabBarIcon: ({color, size}) => (
                  <MaterialCommunityIcons name = "logout" color={color} size={23} />
                ),
              }}
              />
              {/* <AppTab.Screen name="Log out" onPress = component={LoginScreen} /> */}
            </AppTab.Navigator>
          </NavigationContainer>
        </Provider>
      )
    }
  }
  export default App;

  // const App = () => {
    
  //   return(
  //     <NavigationContainer>
  //       <AppStack.Navigator headerMode = 'none'>
  //         <AppStack.Screen name="OnBoarding" component={OnBoardingScreen} />
  //         <AppStack.Screen name="Home" component={HomeScreen} />
  //         <AppStack.Screen name="Login" component={LoginScreen} />
  //         <AppStack.Screen name="Signup" component={SignupScreen} />
  
  //       </AppStack.Navigator>
  //     </NavigationContainer>
  //   )
  // }
  
  // export default App;
  
  // const AppStack = createStackNavigator(
  //   {
  //     Home: HomeScreen,
  //     Components: ComponentsScreen, 
  //     List: ListScreen, 
  //     Image: ImageScreen, 
  //     Counter: CounterScreen,
  //     Colors: ColorScreen,
  //     Square: SquareScreen,
  //     Text: TextScreen,
  //     Scan: ScanScreen,
  //     First: OnBoardingScreen,
  //     Login: LoginScreen,
  //     Signup:SignupScreen,
  
  //   },
  //   {
  //     initialRouteName: "First",
  //     defaultNavigationOptions: {
  //       headerShown:false
  //     }
  //   }
  // );
  
  // export default createAppContainer(navigator);
  
  // export default function App() {
    //   return (
      //     <View style={styles.container}>
      //       <Text> up App.js  start working on your app!</Text>
      //       <StatusBar style="auto" />
      //     </View>
      //   );
      // }
      
      // const styles = StyleSheet.create({
        //   container: {
          //     flex: 1,
          //     backgroundColor: '#fff',
          //     alignItems: 'center',
          //     justifyContent: 'center',
          //   },
          // });