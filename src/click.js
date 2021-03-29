import { ADMIN } from './admin'
import {
    labelBild,
    time,
    tableModal,
    flagHidden,
    storageOut,
    noticBuild,
    catalogBuild,
} from './function'
import { UserPrice } from './classes/userPrice'
import {
    BuildStorageSelect,
    BuildTabs,
    BuildStartSelect,
} from './classes/build'
//

export function calcGlobal() {
    let storage = storageOut(ADMIN.KEY[0])
    if (!!storage) {
        // построение из localStorage
        new BuildStorageSelect('select_1', ADMIN.googleList[0].list, 1)
        new BuildStorageSelect(
            'options_1',
            ADMIN.googleList[2].list,
            ADMIN.tabs[0].value
        )
        new BuildStorageSelect('options_2', ADMIN.googleList[1].list, 1)
        // Построение таблицы сохраненных заказов
        catalogBuild()
    } else {
        new BuildStartSelect(ADMIN.googleList) // построение SELECT услуги
    }

    new BuildTabs(ADMIN.tabs)

    const $body = document.body,
        $calc = document.getElementById('calc'),
        $options_1 = document.getElementById('options_1'),
        $select_1 = document.getElementById('select_1'),
        $options_2 = document.getElementById('options_2'),
        $label_2 = document.getElementById('label_2'),
        $w = document.getElementById('w'),
        $h = document.getElementById('h'),
        tabs = $calc.getElementsByTagName('li'),
        $submit = document.getElementById('submit'),
        UserP = new UserPrice()

    // asa
    ;[...tabs].forEach((tab) => tab.addEventListener('click', tabClick))

    function tabClick(event) {
        const tabId = event.target.dataset.id
        const label = event.target.dataset.label

        ;[...tabs].forEach((tab, i) => {
            tab.classList.remove('active')
        })

        tabs[tabId - 1].classList.add('active')

        new BuildStorageSelect('select_1', ADMIN.googleList[0].list, tabId)
        new BuildStorageSelect(
            'options_1',
            ADMIN.googleList[2].list,
            $select_1.value
        )
        new BuildStorageSelect('options_2', ADMIN.googleList[1].list, tabId)

        UserP.func_S()

        $label_2.textContent = label

        labelBild($select_1, $label_2)
    }

    UserP.func_S()
    labelBild($select_1, $label_2)
    // flagHidden()

    document.addEventListener('click', (e) => {
        const t = e.target
        const $tableEdit = document.querySelector('.tableEdit')

        // Клик по крестику. Удаление строки таблицы
        if (t.classList.contains('tableClose')) {
            UserP.func_TableDelit(t)
        }

        // Клик по элементу таблицы. Вызов модального окна textarea
        if (t.classList.contains('tableEl')) {
            tableModal(t, 'table')
        }

        // Клик по любоиу элементу. Удаление модального окна textarea
        if (
            t.className != 'tableEdit' &&
            t.className != 'tableText' &&
            t.className != 'tableTextSave'
        ) {
            if ($tableEdit) {
                $tableEdit.remove()
            }
        }

        // Клик по кнопке сохранить textarea. Удаление модального окна textarea
        if (t.classList.contains('tableTextSave')) {
            e.preventDefault()
            // data = table, save, info
            const data = t.dataset.in

            if (data == 'table') {
                UserP.func_TableSave(t)
                noticBuild(ADMIN.notic.edit)
            }
            if (data == 'save') {
                UserP.func_tableSaveLocal(t)
                noticBuild(ADMIN.notic.save)
            }
            if (data == 'info') {
                UserP.func_tableSaveInfo(t, '.tableText')
                noticBuild(ADMIN.notic.edit)
            }

            if ($tableEdit) {
                $tableEdit.remove()
            }
        }

        // Клик по кнопке обновить
        if (t.className == 'tableNavR') {
            localStorage.clear()
            location.reload()
        }

        // Клик по кнопке сохранить
        if (t.className == 'tableNavS') {
            tableModal(t, 'save')
        }

        // Клик по кнопке печать
        if (t.className == 'tableNavP') {
            UserP.func_tableNavP()
        }

        // Клик для редактированя описания таблицы
        if (t.className == 'fbModal') {
            tableModal(t, 'info')
        }

        // Клик сохраненные заказы, построение таблицы
        if (t.className == 'catalog_1') {
            UserP.func_tableStorageBuild(t)
        }

        // Клик удалить сохраненный заказ
        if (t.className == 'catalog_3') {
            UserP.func_tableStorageRemove(t)
            flagHidden()
        }
    })

    $select_1.onchange = () => {
        new BuildStorageSelect(
            'options_1',
            ADMIN.googleList[2].list,
            $select_1.value
        )

        UserP.func_S()
        labelBild($select_1, $label_2)
    }

    $options_2.onchange = () => {
        UserP.func_S()
    }

    $options_1.onchange = () => {
        UserP.func_S()
    }

    $w.oninput = () => {
        UserP.func_S()
    }

    $h.oninput = () => {
        UserP.func_S()
    }

    $submit.onclick = tableBuild

    function tableBuild(e) {
        e.preventDefault()

        UserP.func_Table()

        noticBuild(ADMIN.notic.table)
    }

    time('deck_6')
}
