import firebase from 'firebase/app'
import { noticBuild } from '../function'

export async function login({ email, password }) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
        noticBuild(e.message)
        // console.log(e)
        throw e
    }
}

export async function register({ email, password, name }) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        const uid = getUid()
        await firebase.database().ref(`/users/${uid}/info`).set({
            bill: 1000,
            name,
        })
    } catch (e) {
        throw e
    }
}

function getUid() {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
}

export async function logout() {
    await firebase.auth().signOut()
}
