import { optionBuild } from '../function'

import { ADMIN } from '../admin'

import { startRender } from '../data'

export class BuildStorageSelect {
    constructor(element, list, id = '') {
        this.$element = document.getElementById(element)
        this.list = list
        this.model = optionBuild(ADMIN.KEY[0] + this.list)
        this.id = id

        this.$element.innerHTML = ''

        const $w = document.getElementById('w')

        let html = ''
        let html_options_p = 0

        this.model.forEach((el) => {
            if (this.list == 1) {
                if (el.id.indexOf(this.id) == 0)
                    html += `<option value="${el.val}" data-id="${el.id}">${el.text}</option>`
            } else {
                if (el.val.indexOf(this.id) == 0) {
                    html += `<option value="${el.val}" data-el-w="${el.w}" data-el-h="${el.h}" data-el-c="${el.c}" data-el-i="${el.i}" data-el-p="${el.p}">${el.text}</option>`

                    if (html_options_p === 0) html_options_p = el.c
                }
            }
        })

        this.$element.insertAdjacentHTML('beforeend', html)

        if (html_options_p != 0) new BuildInput(html_options_p)

        if (!html) this.$element.disabled = true
        else this.$element.disabled = false

        if (this.id == 4) $w.disabled = true
        else $w.disabled = false
    }
}

export class BuildTabs {
    constructor(arr) {
        const $tabs = document.querySelector('.header__ul.tabs')
        let html = ''
        let active = 'active'

        arr.forEach((el) => {
            if (el.activ === false) active = ''

            html += `<li class="${active}" data-id="${el.dataId}" data-label="${el.dataLabel}">
                            ${el.text}
                        </li>`
        })

        $tabs.insertAdjacentHTML('beforeend', html)
    }
}

export class BuildStartSelect {
    constructor(arr) {
        arr.forEach((el) => {
            startRender(el.el, el.list, el.col)
        })
    }
}

export class BuildInput {
    constructor(val, func) {
        this.$input = document.getElementById('options_p')
        this.$h = document.getElementById('h')
        this.$w = document.getElementById('w')
        this.$label_h = this.$h.previousElementSibling

        this.$input.value = val

        if (func === 'z') {
            this.$h.value = 1
            this.$label_h.textContent = 'Кол-во'
            this.$w.disabled = true
        }
        if (func !== 'z' && this.$w.disabled) {
            this.$label_h.textContent = 'Длина'
            this.$w.disabled = false
        }
    }
}

export class BuildFooterText {
    constructor() {
        this.$el = document.getElementById('footer__text')
        const Data = new Date(),
            Year = Data.getFullYear()

        this.$el.textContent = Year + ' ' + ADMIN.textFooter
    }
}
