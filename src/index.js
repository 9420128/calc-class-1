import 'babel-polyfill'

import header from './layouts/block/header'
import footer from './layouts/block/footer'

import './styles/main.scss'

// import { click } from './click'

import { calcGlobal } from './click'
import { price_js } from './pagesBuild/priceBuild'
import { contact_js } from './pagesBuild/contactBuild'
import { BuildFooterText } from './classes/build'
import { Login } from './classes/login'

const pages = {
    calc: import('./layouts/calc'),
    price: import('./layouts/price'),
    contact: import('./layouts/contact'),
}

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

document.body.innerHTML = `
    ${header}
    <main role="main"></main>
    ${footer}
`.trim()

const mainEl = document.querySelector('main')
const $nav__btn = document.querySelector('.nav__btn')
const $title = document.querySelector('.title')

const renderPage = async (name) => {
    const template = await pages[name]
    mainEl.innerHTML = template.default
    new BuildFooterText()

    if (name === 'calc') calcGlobal()
    else if (name === 'price') price_js()
    else if (name === 'contact') contact_js()
}

renderPage('calc')

const toggleClass = (activeLink, currentLink) => {
    if (activeLink === currentLink) {
        return
    } else {
        activeLink.classList.remove('active')
        currentLink.classList.add('active')
    }
}

const titleBuild = (html) => {
    $title.innerHTML = html
}

const initClickHandlers = () => {
    const navEl = document.querySelector('nav')

    navEl.addEventListener('click', (ev) => {
        if (ev.target.tagName === 'A') {
            const activeLink = navEl.querySelector('.active')
            const currentLink = ev.target
            toggleClass(activeLink, currentLink)
            renderPage(currentLink.name)
            titleBuild(currentLink.innerHTML)
        }
    })
}

initClickHandlers()

$nav__btn.addEventListener('click', (e) => {
    const el = e.target,
        nav = el.nextElementSibling

    el.classList.toggle('active')

    if (el.classList.contains('active')) {
        nav.classList.add('open')

        setTimeout(() => {
            el.classList.remove('active')
            nav.classList.remove('open')
        }, 7000)
    } else nav.classList.remove('open')
})

// -----------------------------------------------------------------  login
const loginInit = () => {
    const $nav__login = document.querySelector('.nav__login')
    const loginJS = new Login()

    firebase.auth().onAuthStateChanged((e) => {
        if (e) {
            $nav__login.classList.remove('nav__login')
            $nav__login.classList.add('nav__logaut')
            $nav__login.setAttribute('title', 'Выйти')
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

loginInit()
