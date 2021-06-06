import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Vibration} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { fetchUser } from '../../redux/actions/index'
import { render } from 'react-dom';
import { bindActionCreators } from 'redux'


function ScanScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  let user = props.currentUser;

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // const handleUpdateUser= () =>{
    // fetchUser();
  // }

  const handleBarCodeScanned = (prop) => {
    setScanned(true);
    if (isNaN(parseInt(prop.data))){
      alert('Invalid QR Code!')
    }
    else{
      console.log("good")
      firebase.firestore().collection("users")
      .doc(firebase.auth().currentUser.uid)
      .update({
        points:user.points+parseInt(prop.data)
      })
      
      alert("Congratulations "+user.name+" You Have Just Earned "+prop.data+" Points!\nGo Check Your Wallet!");
      props.fetchUser();
    }

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const mapStateToProps = (store) => ({
  currentUser:store.userState.currentUser
})
const mapDispatchProps = (dispatch)=> bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(ScanScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

