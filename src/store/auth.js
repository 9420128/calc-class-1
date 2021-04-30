import { noticBuild } from '../function'
import { Login } from '../classes/login'
import { ADMIN } from '../admin'
// ------------------------------------ firebaseConfig --------------------------------- //

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
    apiKey: 'AIzaSyCf2FlwO4FSnk7z6hsWjwyg_meJ_i2s2CM',
    authDomain: 'balkon-a7d2c.firebaseapp.com',
    projectId: 'balkon-a7d2c',
    storageBucket: 'balkon-a7d2c.appspot.com',
    messagingSenderId: '262217519920',
    appId: '1:262217519920:web:b9309b5378e305ecf8eef5',
    measurementId: 'G-DV4QP0P63B',
})

// ------------------------------------ firebaseConfig --------------------------------- //

export const loginInit = () => {
    const $nav__login = document.querySelector('.nav__login')
    const loginJS = new Login()

    firebase.auth().onAuthStateChanged((e) => {
        if (e) {
            $nav__login.classList.remove('nav__login')
            $nav__login.classList.add('nav__logaut')
            $nav__login.setAttribute('title', 'Выйти')

            firebaseCatalog()
        }
    })

    $nav__login.addEventListener('click', (e) => {
        const t = e.target

        // Клик по кнопке войти
        if (t.className === 'nav__login') {
            loginJS.func_login(t)
        }

        // Клик по кнопке выйти
        if (t.className === 'nav__logaut') {
            const isAdmin = confirm('Для выхода нажмите ОК')

            if (isAdmin) loginJS.func_logaut(t)
        }
    })
}

export async function login({ email, password }) {
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
        console.log(e)
        errorNotic(e.code)

        throw e
    }
}

export async function register({ email, password, name }) {
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)

        const uid = getUid()
        await firebase.database().ref(`/users/${uid}/info`).set({
            sd: '',
            name,
        })
    } catch (e) {
        console.log(e)
        errorNotic(e.code)

        throw e
    }
}

export async function logout() {
    await firebase.auth().signOut()
}

function errorNotic(text) {
    let message = ''

    switch (text) {
        case 'auth/user-not-found':
            message = 'Данный Email не найден. Возможно, Email был удален'
            break

        case 'auth/invalid-email':
            message = 'Email введен некорректно'
            break

        case 'auth/wrong-password':
            message = 'Не верный пароль'
            break

        default:
            message = 'Ошибка, обновите страницу'
            break
    }

    noticBuild(message)
}

export async function firebaseSave(key, arr, catalog) {
    try {
        const uid = getUid()

        let fbKey = key.replace(/ /g, '_')
        // запись таблицы
        await firebase.database().ref(`/users/${uid}/info/sd/${fbKey}`).set(arr)

        // запись ключа и информации таблицы
        await firebase
            .database()
            .ref(`/users/${uid}/info/catalog/${fbKey}`)
            .set(catalog)
    } catch (e) {
        errorNotic(e.code)

        console.log(e)

        throw e
    }
}

// -------------------------------- получение данных firebase catalog ---------------------------------
export async function firebaseCatalog() {
    try {
        const uid = getUid()

        const ref = await firebase.database().ref(`users/${uid}/info/catalog`)
        ref.on('value', (snapshot) => {
            const catalog = snapshot.val()

            catalogRender(catalog)
        })
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

function getUid() {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
}

// построение таблицы сохраненных заказов
function catalogRender(data) {
    const $element = document.querySelector('#catalog')
    const $flag = document.querySelector('.flag')

    let html = ''
    $element.innerHTML = ''

    for (var i in data) {
        if (data[i]) {
            html += `<tr>
                <td class="catalog_1" style="width: 100%">${data[i].key}</td>
                <td class="catalog_2">${data[i].data}</td>
                <td><span class="catalog_3" data-val="${data[i].key}"></span></td>
            </tr>`
        }
    }

    if (!html) $flag.classList.add('hidden')
    else $flag.classList.remove('hidden')

    $element.insertAdjacentHTML('beforeend', html)
}

// удаление сохраненного заказа
export async function firebaseRemove(val) {
    const uid = getUid()

    let item = val.replace(/ /g, '_')

    await firebase.database().ref(`users/${uid}/info/catalog/${item}`).remove()
    await firebase.database().ref(`users/${uid}/info/sd/${item}`).remove()
}

// -------------------------------- получение данных firebase sd ---------------------------------
export async function sdRender(val) {
    try {
        const uid = getUid()

        let key = val.replace(/ /g, '_')

        const ref = await firebase.database().ref(`users/${uid}/info/sd/${key}`)

        ref.on('value', (snapshot) => {
            const sd = snapshot.val()

            localStorage.setItem(ADMIN.KEY[2], JSON.stringify(sd))
        })

        const ref_2 = await firebase
            .database()
            .ref(`users/${uid}/info/catalog/${key}`)

        ref_2.on('value', (snapshot) => {
            const catalog = snapshot.val()

            localStorage.setItem(ADMIN.KEY[1], JSON.stringify(catalog))
        })
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}
