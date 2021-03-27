import { KEY, catalogBuild } from './function'

export function querySheets(list, col) {
    const googleUrl = {
        before:
            'https://spreadsheets.google.com/feeds/cells/1xJl4Kkeg5lJyq7Q8uSXi8wsrJcRhRdIvkJtb5ztDPMU/',
        after: '/public/full?alt=json',
    },
        googleMainUrl = googleUrl.before + list + googleUrl.after,
        request = new XMLHttpRequest()

    request.responseType = 'json'
    request.open('GET', googleMainUrl, true)
    request.setRequestHeader(
        'Content-type',
        'application/x-www-form-urlencoded'
    )

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            return request.response.feed.entry

            // if (!localStorage.key(KEY()[0])) {
            //     startRender(col, entry)
            // }
            // toStorage(list, col, entry)
        }
    })

    request.send()
}

function toStorage(list, col, entry) {
    let arr = [],
        key = KEY()[0] + list

    for (let i = col; i < entry.length; i += col) {
        let obj = {}

        if (col == 3) {
            obj.val = entry[i].content.$t
            obj.text = entry[i + 1].content.$t
            obj.id = entry[i + 2].content.$t
        } else {
            obj.val = entry[i].content.$t
            obj.text = entry[i + 1].content.$t
            obj.h = entry[i + 3].content.$t
            obj.w = entry[i + 2].content.$t
            obj.c = entry[i + 4].content.$t
            obj.i = entry[i + 5].content.$t
            obj.p = entry[i + 6].content.$t
        }

        arr.push(obj)
    }

    localStorage.setItem(key, JSON.stringify(arr))
}

function startRender(col, entry) {
    const $select_1 = document.getElementById('select_1')

    let html = ''

    for (let i = col; i < entry.length; i += col) {
        html += `<option value="${entry[i].content.$t}" data-id="${entry[i + 2].content.$t
            }">${entry[i + 1].content.$t}</option>`
    }
    $select_1.insertAdjacentHTML('beforeend', html)
}

// Построение таблицы сохраненных заказов
catalogBuild()
