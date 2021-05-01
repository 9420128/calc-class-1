import { noticBuild } from './function'
import { Login } from './classes/login'
import { ADMIN } from './admin'
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

const db = firebase.database()
const auth = firebase.auth()

export const loginInit = () => {
    const $nav__login = document.querySelector('.nav__login')
    const loginJS = new Login()

    auth.onAuthStateChanged((e) => {
        if (e) {
            $nav__login.classList.remove('nav__login')
            $nav__login.classList.add('nav__logaut')
            $nav__login.setAttribute('title', 'Выйти')

            firebaseCatalog()

            avtorizateShow()
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
        await auth.signInWithEmailAndPassword(email, password)
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

export async function register({ email, password, name }) {
    try {
        await auth.createUserWithEmailAndPassword(email, password)

        const uid = getUid()
        await db.ref(`/users/${uid}`).set({
            name,
        })
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

export async function logout() {
    await auth.signOut()

    // закрыть кнопку сохранить
    avtorizateShow()
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
        await db.ref(`/users/${uid}/sd/${fbKey}`).set(arr)

        // запись ключа и информации таблицы
        await db.ref(`/users/${uid}/catalog/${fbKey}`).set(catalog)
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

// -------------------------------- получение данных firebase catalog ---------------------------------
export async function firebaseCatalog() {
    try {
        const uid = getUid()

        const ref = await db.ref(`users/${uid}/catalog`)
        ref.on('value', (snapshot) => {
            const catalog = snapshot.val()

            localStorage.setItem(ADMIN.KEY[1], JSON.stringify(catalog))

            catalogRender(catalog)
        })

        const ref_2 = await db.ref(`users/${uid}/sd`)

        ref_2.on('value', (snapshot) => {
            const sd = snapshot.val()

            localStorage.setItem(ADMIN.KEY[2], JSON.stringify(sd))
        })
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

function getUid() {
    const user = auth.currentUser
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

    await db.ref(`users/${uid}/catalog/${item}`).remove()
    await db.ref(`users/${uid}/sd/${item}`).remove()
}

// показ кнопки сохранить заказ при авторизации
function avtorizateShow() {
    const $nav__logaut = document.querySelector('.nav__logaut')
    const $tableNavS = document.querySelector('.tableNavS')

    if ($nav__logaut) {
        $tableNavS.style.display = 'block'
    } else $tableNavS.style.display = 'none'
}
