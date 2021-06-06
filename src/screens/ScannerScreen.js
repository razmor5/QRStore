import React, { Component, useState, useEffect } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImageBackground} from "react-native";
import HomeComponents from '../components/HomeComponents';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../redux/actions/index'

// const [hasPermission, setHasPermission] = useState(null);
export class ScannerScreen extends Component {

    

    
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
// const mapDispatchProps = (dispatch)=> bindActionCreators({fetchUser}, dispatch)
export default connect(mapStateToProps, mapDispatchProps)(ScannerScreen);


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  backgroundStyle: {
    minHeight: '100%',
  }
});



// const HomeScreen = (props, userCredential) => {
//   // console.log("this is the props=======================================================\n",props)
//   console.log("this is the user=======================================================\n",firebase.auth().currentUser)
//   return (
//     <View >
//       <ImageBackground 
//         source = {require('../../assets/backgroundImage.jpg')}
//         style={styles.backgroundStyle}
//         resizeMode='cover'
//         blurRadius={2}
//         >
//         <HomeComponents title="My Wallet" imageSource = {require('../../assets/wallet.png')} onClick={()=>{firebase.auth().signOut()
//           .then(()=>{
//             props.navigation.navigate('Login')
//           })}} />
//         <HomeComponents title="Stores" imageSource = {require('../../assets/tag.png')} onClick={()=>{props.navigation.navigate('Text')}}/>
//         <HomeComponents title="Scan a code" imageSource = {require('../../assets/photo-camera.png') } onClick={()=>{props.navigation.navigate('Scan')}} />      
//       </ImageBackground>
//     </View>
//       /* <Text style={styles.text}>QR code</Text>
//       <Button
//         onPress = {() => navigation.navigate('Components')}
//         title = 'Go to Components Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('List')}
//         title = 'Go to List Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('Image')}
//         title = 'Go to Image Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('Counter')}
//         title = 'Go to Counter Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('Colors')}
//         title = 'Go to Colors Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('Square')}
//         title = 'Go to Square Demo'
//       />
//       <Button
//         onPress = {() => navigation.navigate('Text')}
//         title = 'Go to Text Demo'
//       /> */

    
//   );
// };





// import React, { useState, useEffect, Component } from 'react';
// import { Text, View, StyleSheet, Button, Vibration} from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import firebase from 'firebase';
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { fetchUser } from '../../redux/actions/index'

// export class ScannerScreen extends Component {
//     componentDidMount() {
//         // this.props.fetchUser();
//     }
//     render(){
//         return(
//             <View></View>
//         )
//     }
// }

// // const mapStateToProps = (store) => ({
// //     currentUser: store.userState.currentUser
// // })
// // const mapDispatchProps = (dispatch)=> bindActionCreators({fetchUser}, dispatch)

// // export default connect(mapStateToProps, mapDispatchProps)(ScannerScreen);



// export default ScannerScreen

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       flexDirection: 'column',
//       justifyContent: 'center',
//     },
// });
