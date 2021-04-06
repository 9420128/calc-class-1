import 'babel-polyfill'

import header from './layouts/block/header'
import footer from './layouts/block/footer'

import './styles/main.scss'

// import { click } from './click'

import { calcGlobal } from './click'
import { price_js } from './price/priceBuild'

const pages = {
    calc: import('./layouts/calc'),
    price: import('./layouts/price'),
    sroki: import('./layouts/sroki'),
    contact: import('./layouts/contact'),
}

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

    if (name === 'calc') calcGlobal()
    else if (name === 'price') price_js()
}

renderPage('price')

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
        }, 5000)
    } else nav.classList.remove('open')
})
