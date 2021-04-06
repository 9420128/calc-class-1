import { storageOut } from '../function'
import { ADMIN } from '../admin'
import { UserPrice } from '../classes/userPrice'

export const price_js = () => {
    const arr = storageOut(ADMIN.KEY[0] + 3),
        UserP = new UserPrice(),
        $print = document.querySelector('.print')

    if (!arr) return
    const $table_price = document.getElementById('table_price')

    let ulica = [],
        steny = [],
        polna = [],
        utepl = [],
        krish = [],
        podok = [],
        dopyi = ''

    arr.forEach((el) => {
        if (el.c > 0) {
            if (el.val === 'ulica') ulica.push(tdBuild(el))
            else if (el.val === 'steny') steny.push(tdBuild(el))
            else if (el.val === 'polna') polna.push(tdBuild(el))
            else if (el.val === 'utepl') utepl.push(tdBuild(el))
            else if (el.val === 'krish') krish.push(tdBuild(el))
            else if (el.val === 'podok') podok.push(tdBuild(el))
            else if (el.val === 'dopyi')
                dopyi += `<tr><td colspan="2">${el.text}</td><td>${el.i}</td><td>${el.c}</td></tr>`
            //  dopyi.push(tdBuild(el))
        }
    })

    let html =
        trBuild(ulica, 'Отделка с улицы') +
        trBuild(steny, 'Отделка стен, потолка') +
        trBuild(polna, 'Настил пола') +
        trBuild(utepl, 'Утепление') +
        trBuild(krish, 'Монтаж крыши') +
        trBuild(podok, 'Установка подоконников') +
        dopyi

    $table_price.insertAdjacentHTML('beforeend', html)

    function tdBuild(el) {
        return `<td>${el.text}</td><td>${el.i}</td><td>${el.c}</td>`
    }

    // console.log(html_ulica)
    function trBuild(arr, text) {
        let html = ''
        for (let i = 0; i < arr.length; i++) {
            if (i === 0)
                html = `<tr><td rowspan="${arr.length}"><b>${text}</b></td>${arr[0]}</tr>`
            else html += `<tr>${arr[i]}</tr>`
        }

        return html
    }

    function srokiBuild() {
        const $table_sroci = document.getElementById('table_sroci')
        let html = ''

        ADMIN.sroki.forEach((el) => {
            html += `<tr>
                        <td style="width: 90%;">${el.name}</td>
                        <td nowrap>${el.val}</td>
                    </tr>`
        })

        $table_sroci.insertAdjacentHTML('beforeend', html)
    }

    srokiBuild()

    $print.onclick = () => UserP.func_tableNavP()
}
