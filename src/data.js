import 'babel-polyfill'
import { ADMIN } from './admin'

export async function startRender(el, list, col) {
    let googleMainUrl = ADMIN.googleURL.before + list + ADMIN.googleURL.after

    let response = await fetch(googleMainUrl)
    if (response.ok) {
        let data = await response.json(),
            entry = data.feed.entry

        startRenderOptions(el, list, col, entry)
    } else {
        alert('error', response.status)
    }
}

function startRenderOptions(el, list, col, entry) {
    const $element = document.getElementById(el)

    let html = '',
        arr = [],
        key = ADMIN.KEY[0] + list

    if (list == 1) {
        for (let i = col; i < entry.length; i += col) {
            let obj = {}
            obj.val = entry[i].content.$t
            obj.text = entry[i + 1].content.$t
            obj.id = entry[i + 2].content.$t

            if (obj.id == 1)
                html += `<option value="${obj.val}" data-id="${obj.id}">${obj.text}</option>`

            arr.push(obj)
        }
    } else {
        for (let i = col; i < entry.length; i += col) {
            let obj = {}
            obj.val = entry[i].content.$t
            obj.text = entry[i + 1].content.$t
            obj.h = entry[i + 3].content.$t
            obj.w = entry[i + 2].content.$t
            obj.c = entry[i + 4].content.$t
            obj.i = entry[i + 5].content.$t
            obj.p = entry[i + 6].content.$t

            if (obj.val == 1 || obj.val == 'steny')
                html += `<option value="${obj.val}" data-el-w="${obj.w}" data-el-h="${obj.h}" data-el-c="${obj.c}" data-el-i="${obj.i}" data-el-p="${obj.p}">${obj.text}</option>`

            arr.push(obj)
        }
    }

    $element.insertAdjacentHTML('beforeend', html)
    localStorage.setItem(key, JSON.stringify(arr))
}
