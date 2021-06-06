import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux'
import { fetchUser } from '../../redux/actions/index'
import { bindActionCreators } from 'redux'


class WalletScreen extends Component {
    
    render() {
        let user = this.props.currentUser
        return (
            <View style={styles.container}>
                <Image
                source={require('../../assets/id-card.png')}
                style={styles.logo}
                />
                <Text style={styles.bigtext}>
                    My Wallet!
                </Text>
                <Text style={styles.text}>
                    My Name: {user.name}
                </Text>
                <Text style={styles.text}>
                    My EMail: {user.email}
                </Text>
                <Text style={styles.text}>
                    My Points: {user.points}
                </Text>
                <View style={styles.navButton}>
                    <Text style={styles.navButtonText}>
                        Keep scan for more points!
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
export default connect(mapStateToProps, null)(WalletScreen);


// const mapStateToProps = (store) => ({
//     currentUser:store.userState.currentUser
// })
// export default connect(mapStateToProps, null)(WalletScreen)



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
    bigtext:{
        fontSize: 48,
        marginBottom: 10,
        color: '#051d5f',
    },
    text: {
        // fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
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
});
