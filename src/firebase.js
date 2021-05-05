import { noticBuild } from './function'
import { Login } from './classes/login'
import { ADMIN } from './admin'
// ------------------------------------ firebaseConfig --------------------------------- //

// import * as admin from 'firebase-admin'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// var serviceAccount = require('../admin/balkon-a7d2c-firebase-adminsdk-n7u22-fdebf2cd4b.json')

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://balkon-a7d2c-default-rtdb.firebaseio.com',
// })

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
            email,
            password,
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

    noticBuild(message, 'error')
}

export async function firebaseSave(key, arr, catalog) {
    try {
        const uid = getUid()

        let fbKey = key
            .replace(/[^a-zа-яё0-9 ]/gi, '_')
            .trim()
            .replace(/ /g, '_')
        // запись таблицы
        if (arr.length == 0)
            return noticBuild('Таблица пуста. Данные не сохранены!', 'error')

        await db.ref(`/data/${uid}/sd/${fbKey}`).set(arr)

        // запись ключа и информации таблицы
        await db.ref(`/data/${uid}/catalog/${fbKey}`).set(catalog)

        noticBuild(ADMIN.notic.save)
    } catch (e) {
        errorNotic(e.code)

        throw e
    }
}

// -------------------------------- получение данных firebase catalog ---------------------------------
export async function firebaseCatalog() {
    try {
        const uid = getUid()

        const ref = await db.ref(`data/${uid}/catalog`)
        ref.on('value', (snapshot) => {
            const catalog = snapshot.val()

            if (catalog)
                localStorage.setItem(ADMIN.KEY[1], JSON.stringify(catalog))

            catalogRender(catalog)
        })

        const ref_2 = await db.ref(`data/${uid}/sd`)

        ref_2.on('value', (snapshot) => {
            const sd = snapshot.val()

            if (sd) localStorage.setItem(ADMIN.KEY[2], JSON.stringify(sd))
        })

        // получение всех пользователей
        const ref_3 = await db.ref(`users`)

        ref_3.on('value', (snapshot) => {
            const users = snapshot.val()

            if (users) usersRender(users)
        })

        // получение данных пользователя
        const ref_4 = await db.ref(`users/${uid}/email`)

        ref_4.on('value', (snapshot) => {
            const email = snapshot.val()

            if (email)
                document.querySelector(
                    'h2'
                ).textContent = `Сохраненные заказы ${email}`
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
                <td><span class="catalog_3" data-val="${i}"></span></td>
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

    await db.ref(`data/${uid}/catalog/${val}`).remove()
    await db.ref(`data/${uid}/sd/${val}`).remove()
}

// показ кнопки сохранить заказ при авторизации
function avtorizateShow() {
    const $nav__logaut = document.querySelector('.nav__logaut')
    const $tableNavS = document.querySelector('.tableNavS')

    if ($nav__logaut) {
        $tableNavS.style.display = 'block'
    } else $tableNavS.style.display = 'none'
}

// показ Userov
function usersRender(users) {
    const el = document.querySelector('.flag')
    const userTable = document.querySelector('#userTable')

    if (userTable) userTable.remove()

    const table = document.createElement('table')
    const tbody = document.createElement('tbody')
    table.id = 'userTable'
    table.className = 'fb-table'

    let html = ''

    for (var i in users) {
        if (users[i]) {
            html += `<tr>
                <td style="width: 100%">${users[i].email}</td>
                <td>${users[i].name}</td>
                <td><span class="userTableRemove" data-val="${i}" title="Удалить расчеты пользователя?"></span></td>
            </tr>`
        }
    }

    tbody.innerHTML = html
    table.innerHTML = tbody.outerHTML

    el.insertAdjacentHTML('afterend', table.outerHTML)
}

//  удалить User из firebase
export async function userTableRemove(t) {
    const val = t.dataset.val

    let moderator = false

    const ref = await db.ref(`/users/${val}/moderator`)

    ref.on('value', (snapshot) => {
        moderator = snapshot.val()
    })

    if (moderator)
        return noticBuild(
            'Пользователя с правами администратора удалить нельзя!',
            'error'
        )

    await db.ref(`data/${val}`).remove()
    // await db.ref(`users/${val}`).remove()

    t.parentElement.parentElement.remove()
}
