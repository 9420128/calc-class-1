import { selectVal, storageOut, trBuild } from '../function'
import { ADMIN } from '../admin'
import { firebaseSave, firebaseRemove, userTableRemove } from '../firebase'

export class UserPrice {
    constructor() {
        this.$w = document.getElementById('w')
        this.$h = document.getElementById('h')
        this.$select_1 = document.getElementById('select_1')
        this.$options_1 = document.getElementById('options_1')
        this.$options_p = document.getElementById('options_p')
        this.$label_2 = document.getElementById('label_2')
        this.$options_2 = document.getElementById('options_2')
        this.$deck_1 = document.getElementById('deck_1')
        this.$deck_2 = document.getElementById('deck_2')
        this.$deck_3 = document.getElementById('deck_3')
        this.$deck_4 = document.getElementById('deck_4')
        this.$deck_5 = document.getElementById('deck_5') // Спецификация
        this.$deck_6 = document.getElementById('deck_6') // Дата
        this.$deck_7 = document.getElementById('deck_7') // Адрес
        this.$deck_8 = document.getElementById('deck_8') // Примечание
        this.$deck_9 = document.getElementById('deck_9') // Исполнитель
        this.$deck_10 = document.getElementById('deck_10') // Заказчик
        this.$tableSumm = document.getElementById('tableSumm')
        this.$deck_2_2 = document.getElementById('deck_2_2')
        this.$table = document.getElementById('table')
        this.$duble = document.getElementById('duble')
        this.arr = []

        // firebaseSdRender()
    }

    func_Formula(f, w, h) {
        let sum = 0
        if (f == 's') sum = w * h
        else if (f == 'p') sum = w + h
        else if (f == '2p') sum = (w + h) * 2
        else if (f == 'z') sum = h * 1000
        else if (f == 'k') {
            let s = w * h
            sum = Math.ceil(s / 0.5) * 0.5
        }

        return sum
    }

    func_S() {
        let w = !this.$w.disabled ? this.$w.value / 1000 : 0
        let h = this.$h.value / 1000

        // let c = +selectVal(this.$options_1)[3],
        let c = +this.$options_p.value,
            cU = +selectVal(this.$options_2)[3],
            i = selectVal(this.$options_1)[4],
            f = selectVal(this.$options_1)[5],
            fU = selectVal(this.$options_2)[5],
            izm = this.func_Formula(f, w, h),
            izmU = this.func_Formula(fU, w, h)

        if (isNaN(w * h) || isNaN(c)) return

        this.$deck_2.innerText = MyToFixed(izm)

        if (cU == 0 || isNaN(cU)) {
            cU = 0
        }

        this.$deck_3.innerText = (Number(izm * c) + Number(izmU * cU)).toFixed()
        this.$deck_3.dataset.c = (izm * c).toFixed()
        this.$deck_3.dataset.cU = (izmU * cU).toFixed()

        this.$deck_3.dataset.izm = MyToFixed(izm)
        this.$deck_3.dataset.izmU = MyToFixed(izmU)

        if (i) this.$deck_2_2.innerText = i

        function MyToFixed(num) {
            return Number.isSafeInteger(num) ? num : num.toFixed(1)
        }
    }

    func_Table() {
        let text_1 = selectVal(this.$select_1)[2],
            text_2 = this.$label_2.textContent,
            options_1 = selectVal(this.$options_1)[2],
            options_2 = selectVal(this.$options_2)[2],
            i = selectVal(this.$options_1)[4],
            iU = selectVal(this.$options_2)[4],
            p_1 = this.$deck_3.dataset.c,
            p_2 = this.$deck_3.dataset.cU,
            izm = this.$deck_3.dataset.izm,
            izmU = this.$deck_3.dataset.izmU,
            html_w = ` x ${this.$w.value / 1000}`,
            html =
                this.$w.disabled === true || this.$duble.checked
                    ? ''
                    : ` <i>${this.$h.value / 1000 + html_w}</i>`

        if (p_1 != 0) {
            this.func_TableBuild(text_1 + html, options_1, izm, i, p_1)
        }

        if (p_2 != 0) {
            this.func_TableBuild(text_2 + html, options_2, izmU, iU, p_2)
        }

        this.func_tableSummBuild('deck_4')
        this.func_tableSummBuild('tableSumm')
    }

    func_TableBuild(text, option, s, i, p) {
        const tr = document.querySelectorAll('.tableRow')
        let flag = true,
            count = 1

        // если в таблице ЕСТЬ значения
        if (tr.length) {
            this.$table.innerHTML = ''

            this.arr.forEach((el, i) => {
                if (
                    el.text === text &&
                    el.option == option &&
                    this.$duble.checked &&
                    flag
                ) {
                    el.num = i
                    el.text = text
                    el.option = option
                    el.s = Number(el.s) + Number(s)
                    el.p = Number(el.p) + Number(p)
                    flag = false
                }
            })
        }
        if (flag == true) {
            let str = {}

            str.num = count
            str.text = text
            str.option = option
            str.s = s
            str.i = i
            str.p = p

            this.arr.push(str)
            count++
        }

        trBuild(this.arr, 'table')

        this.$deck_1.textContent = this.arr.length

        this.func_tableSummBuild('deck_4')
        this.func_tableSummBuild('tableSumm')
    }

    func_TableDelit(el) {
        el.parentElement.parentElement.remove()
        let num = el.dataset.num - 1

        delete this.arr.splice(num, 1)

        trBuild(this.arr, 'table')

        this.func_tableSummBuild('deck_4')
        this.func_tableSummBuild('tableSumm')
    }

    func_TableSave(el) {
        const $tableText = document.querySelector('.tableText'),
            tr = el.parentElement.parentElement.parentElement.parentElement

        let newText = $tableText.value
        tr.textContent = newText

        const i = tr.dataset.id
        const item = tr.dataset.el

        this.arr.forEach((elem, index) => {
            if (i == index) {
                if (item == 'num') elem.num = newText
                if (item == 'text') elem.text = newText
                if (item == 'option') elem.option = newText
                if (item == 's') elem.s = newText
                if (item == 'i') elem.i = newText
                if (item == 'p') elem.p = newText
            }
        })

        this.func_tableSummBuild('deck_4')
        this.func_tableSummBuild('tableSumm')
    }

    func_tableSumm() {
        let summ = 0

        if (!this.arr) return

        this.arr.forEach((p) => {
            summ += Number(p.p)
        })
        return summ.toFixed()
    }

    func_tableSummBuild(el) {
        const element = document.getElementById(el)
        element.textContent = this.func_tableSumm()
    }

    // Клик по кнопке печать
    func_tableNavP() {
        let printing_css = `<style media=print>
        * {font-family: -apple-system, BlinkMacSystemFont, "Open Sans", Arial; font-size: 11px; text-align: left;}
        #print {padding: 0 20px}
        table {caption-side: bottom; width: 100%; border-collapse: collapse; margin-top: 25px}
        .fb-table__p {display: block; border-bottom: 1px solid  #999}
        td,th {padding: 6px 8px;}
        h3 span{font-size: 14px;}

        th:nth-child(6),td:nth-child(7), .slid, #calc, button {display: none}
        tr{border-bottom: 1px solid #999;}
        td:nth-child(2),td:nth-child(3) {width: 45%}
        td:nth-child(4) {padding: 6px 0, width: 1px; text-align: right}
        td:nth-child(5) {width: 1px;  white-space: nowrap}
        td:nth-child(6) {text-align: center; width: 1px;  white-space: nowrap}
        h3 {font-size: 14px; font-weight: 700; margin-bottom: 20px}
        </style>`

        const el = document.getElementById('print')
        let html_to_print = printing_css + el.innerHTML
        let iframe = '<iframe id="print_frame"></iframe>'

        document.body.insertAdjacentHTML('beforeend', iframe)

        let doc =
            document.getElementById('print_frame').contentDocument ||
            document.getElementById('print_frame').contentWindow.document
        let win =
            document.getElementById('print_frame').contentWindow ||
            document.getElementById('print_frame')

        doc.getElementsByTagName('body')[0].innerHTML = html_to_print
        win.print()

        document.getElementById('print_frame').remove()
    }

    // Добовление информации
    func_tableSaveInfo(el, tableText) {
        const val = document.querySelector(tableText).value,
            span = el.parentElement.parentElement.parentElement.parentElement

        span.textContent = val
    }

    // Сохранение
    func_tableSaveLocal(el) {
        const val = document.querySelector('.tableText').value
        document.querySelector('title').textContent = val

        if (!val) return

        const info = {
            key: val,
            spec: this.$deck_5.textContent.trim(),
            data: this.$deck_6.textContent.trim(),
            adres: this.$deck_7.textContent.trim(),
            prim: this.$deck_8.textContent.trim(),
            isp: this.$deck_9.textContent.trim(),
            user: this.$deck_10.textContent.trim(),
        }

        firebaseSave(val, this.arr, info)
    }

    // Клик сохраненные заказы, построение таблицы
    func_tableStorageBuild(t) {
        const key = t.textContent
                .replace(/[^a-zа-яё0-9 ]/gi, '_')
                .trim()
                .replace(/ /g, '_'),
            arrZakaz = storageOut(ADMIN.KEY[2]),
            arrCatalog = storageOut(ADMIN.KEY[1])[key]

        this.arr = arrZakaz[key]

        trBuild(this.arr, 'table')
        this.func_tableSummBuild('deck_4')
        this.func_tableSummBuild('tableSumm')

        this.$deck_5.textContent = arrCatalog.spec
        this.$deck_6.textContent = arrCatalog.data
        this.$deck_7.textContent = arrCatalog.adres
        this.$deck_8.textContent = arrCatalog.prim
        this.$deck_9.textContent = arrCatalog.isp
        this.$deck_10.textContent = arrCatalog.user
    }

    // Клик удалить сохраненный заказ
    func_tableStorageRemove(t) {
        const val = t.dataset.val

        t.parentElement.parentElement.remove()

        // удаление сохраненного заказа - firebase
        firebaseRemove(val)
    }

    // Клик удалить User из firebase
    func_userTableRemove(t) {
        const isAdmin = confirm('Для удаления нажмите ОК')

        if (isAdmin) {
            userTableRemove(t)
        }
    }
}
