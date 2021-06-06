import React, { Component } from "react";
import { Text, StyleSheet, View, FlatList, Button, TouchableOpacity, ImageBackground} from "react-native";
import HomeComponents from '../components/HomeComponents';
import firebase from 'firebase';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../../redux/actions/index'
import {windowHeight, windowWidth} from '../../Dimensions';

const feeds = [
  {storeName:'FOX', data: "20% הנחה על כל החנות, למשתמשי האפליקציה"},
  {storeName:'H&M', data: "קנייה ראשונה באפליקציה מקנה 250 נקודות בנוסף לסריקת הקבלה!"},
  {storeName:'Lalin', data: "קני בללין בשיטת 3+1 למשתמשי האפליקציה"},
  {storeName:'ריבר', data: "שלם בנקודות וקבל הגדלה עלינו!"},
  {storeName:'Cinema City', data: "כרטיס לסרט 1+1 בימי ראשון עד חמישי"},
  {storeName:'Yes Planet', data: "למשלמים בנקודות 10% הנחה במזנון לכל ימות השבוע"},
  {storeName:'ישרוטל', data: "סוף שבוע זוגי מתנה לאחד ממשתמשי האפליקציה, ההגרלה תתקיים ב 24.12.2021"},
];
export class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    const {currentUser} = this.props;
    // console.log(currentUser)
    if (currentUser==undefined){
      return (
        <View></View>
      )
    }
    return (
      <View style={styles.maincontainer}>

        <FlatList
          showsVerticalScrollIndicator ={false}
          style = {styles.listcontainer}
          keyExtractor = {feeds => feeds.storeName}
          data = {feeds}
          renderItem = {({item})=>{
              return(
                <View>
                  <ImageBackground
                  source = {require('../../assets/wallet.png')}
                  style={styles.backgroundStyle}
                  // resizeMode='cover'
                  // blurRadius={2}

                  
                  >
                    <Text style = {styles.bigtext}>{item.storeName}  </Text>
                    <View style = {styles.container}>
                      <Text style = {styles.text}>{item.data}</Text>
                    </View>

                  </ImageBackground>
                </View>
              ) 
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch)=> bindActionCreators({fetchUser}, dispatch)



export default connect(mapStateToProps, mapDispatchProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: windowHeight/15,

  },
  maincontainer: {
    backgroundColor: '#d8e2e3',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
  logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
  },
  bigtext:{
      fontSize: 48,
      // marginBottom: 40,
      color: '#ffff',
      // paddingBottom: 0,
      paddingTop: windowHeight/6,
  },
  text: {
      // fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 18,
      justifyContent: 'center',
      alignItems: 'center',
      // marginBottom: windowHeight/5,
      width:windowHeight/5,
      color: '#ffff',
      // paddingTop: ,
  },
  listcontainer: {
      marginTop: 100,
  },
  forgotButton: {
      marginVertical: 35,
  },
  navButtonText: {
      fontSize: 40,
      fontWeight: '500',
      color: '#b3804d',
      // fontFamily: 'Lato-Regular',
  },
  backgroundStyle: {
    flex: 1,
    alignItems: 'center',
    resizeMode:'cover',
    width:windowHeight/2.2,
    height:windowHeight/2.2,
  },
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

