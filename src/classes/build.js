import {
    optionBuild,
    KEY,
} from '../function'

import { startRender } from '../data'

export class BuildStorageSelect {
    constructor(element, list, id = '') {
        this.$element = document.getElementById(element)
        this.list = list
        this.model = optionBuild(KEY()[0] + this.list)
        this.id = id

        this.$element.innerHTML = ''

        const $w = document.getElementById('w')

        let html = ''


        this.model.forEach((el) => {

            if (this.list == 1) {
                if (el.id.indexOf(this.id) == 0)
                    html += `<option value="${el.val}" data-id="${el.id}">${el.text}</option>`

            } else {
                if (el.val.indexOf(this.id) == 0)
                    html += `<option value="${el.val}" data-el-w="${el.w}" data-el-h="${el.h}" data-el-c="${el.c}" data-el-i="${el.i}" data-el-p="${el.p}">${el.text}</option>`
            }

        })
        this.$element.insertAdjacentHTML('beforeend', html)


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

        arr.forEach(el => {
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
        arr.forEach(el => {
            startRender(el.el, el.list, el.col)
        })
    }
}
