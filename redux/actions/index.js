import firebase from 'firebase';
import { USER_STATE_CHANGE } from '../constants/index'

// export function updateUser(){
//     return((dispatch) =>{
//         firebase.firestore().collection("users")
//         .doc(firebase.auth().currentUser.uid)
//         .update({
//         points:user.points+parseInt(prop.data)
//         })
//     }

//     )
// }

export function fetchUser(){
    return ((dispatch) => {
        console.log('fetched')
        firebase.firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((snapshot) => {
            if(snapshot.exists){
                dispatch({type :USER_STATE_CHANGE, currentUser:snapshot.data()})
            } else{
                console.log('not exist')
            }
        })
    })
}
