export function selectVal(el) {
    let thisElem = el.options,
        n = thisElem.selectedIndex,
        dataW,
        dataH,
        selectText,
        dataC,
        dataI,
        dataP

    if (n != -1) {
        dataW = thisElem[n].dataset.elW // [0]
        dataH = thisElem[n].dataset.elH // [1]
        selectText = thisElem[n].text // [2]
        dataC = thisElem[n].dataset.elC // [3]
        dataI = thisElem[n].dataset.elI // [4]
        dataP = thisElem[n].dataset.elP // [5]
    }

    return [dataW, dataH, selectText, dataC, dataI, dataP]
}

export function checkboxVal(el) {
    if (el.checked) {
        return Number(el.value)
    } else {
        return 0
    }
}

export function optionBuild(myKey) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)

        if (key.indexOf(myKey) == 0) {
            return JSON.parse(localStorage.getItem(key))
        }
    }
}

export function labelBild(el, label) {
    const tab = document.querySelector('li.active')

    if (tab.dataset.id != 1 || !!selectVal(el)[2] === false) return

    let text = selectVal(el)[2].split(' '),
        text_2 = tab.dataset.label

    text.splice(0, 1, text_2)
    label.textContent = text.join(' ')

    text = []
}

export function time(el) {
    const Data = new Date(),
        Year = Data.getFullYear(),
        Month = Data.getMonth(),
        Day = Data.getDate(),
        element = document.getElementById(el)

    let fMonth = Month < 10 ? '0' + Month : Month
    element.textContent = Day + '.' + fMonth + '.' + Year
}

export function tableModal(el, data) {
    // data = table, save, info
    let type = el.dataset.type ? el.dataset.type : 'text'

    let text = data != 'save' ? el.textContent : ''
    let html = `<form class="tableEdit fb-modal">
                        <div class="fb-modal__row">
                            <input class="tableText" type="${type}" value="${text}" onfocus="this.select()">
                            <div class="fb-modal__col">
                                <button data-in="${data}" class="tableTextSave" type="submit">
                                </button>
                            </div>
                        </div>
                    </form>`

    // <textarea class="tableText" cols="30">${text}</textarea>
    el.insertAdjacentHTML('beforeend', html)

    const cursor = document.querySelector('.tableText')
    cursor.focus()

    if (type === 'text') cursor.selectionStart = cursor.value.length

    // if (el.dataset.type) cursor.setAttribute('type', el.dataset.type)
}

export function storageOut(key) {
    let instner = localStorage.length

    if (instner > 0) {
        for (let i = 0; i < instner; i++) {
            let item = localStorage.key(i)

            if (item.indexOf(key) == 0) {
                return JSON.parse(localStorage.getItem(item))
            }
        }
    }
}

export function trBuild(arr, el) {
    let html = ''
    const $element = document.getElementById(el)
    $element.innerHTML = ''

    if (!arr) return

    arr.forEach((el, i) => {
        html += `<tr class="tableRow">
                <td class="tableEl" data-el="num" nowrap data-id="${i}" data-type="number">${
            i + 1
        }</td>
                <td class="tableEl" data-el="text" data-id="${i}">${
            el.text
        }</td>
                <td class="tableEl" data-el="option" data-id="${i}">${
            el.option
        }</td>
                <td class="tableEl" data-el="s" data-id="${i}" data-type="number" nowrap>${
            el.s
        }</td>
                <td class="tableEl" data-el="i" data-id="${i}" nowrap>${
            el.i
        }</td>
                <td class="tableEl" data-el="p" data-id="${i}" data-type="number" nowrap>${
            el.p
        }</td>
                <td><i class="tableClose" data-num="${i + 1}"></i></td>
            </tr>`
    })

    $element.insertAdjacentHTML('beforeend', html)
}

export function noticBuild(message, tip = null) {
    const $noticBlock = document.querySelector('.notic__block'),
        $noticText = document.querySelector('.notic__text'),
        $noticBlockError = document.querySelector('.notic__block.error')

    if (!tip && $noticBlockError) $noticBlock.classList.remove('error')
    if (tip === 'error' && !$noticBlockError) $noticBlock.classList.add('error')

    $noticBlock.classList.add('open')
    $noticText.textContent = message
    setTimeout(() => $noticBlock.classList.remove('open'), 4000)
}
