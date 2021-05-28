import { ADMIN } from './admin'
import {
    labelBild,
    time,
    tableModal,
    storageOut,
    noticBuild,
    selectVal,
} from './function'
import { UserPrice } from './classes/userPrice'
import {
    BuildStorageSelect,
    BuildTabs,
    BuildStartSelect,
    BuildInput,
} from './classes/build'

import { firebaseCatalog } from './firebase'
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
    } else {
        new BuildStartSelect(ADMIN.googleList) // построение SELECT услуги
    }

    new BuildTabs(ADMIN.tabs)

    const $calc = document.getElementById('calc'),
        $options_1 = document.getElementById('options_1'),
        $select_1 = document.getElementById('select_1'),
        $options_2 = document.getElementById('options_2'),
        $options_p = document.getElementById('options_p'),
        $label_2 = document.getElementById('label_2'),
        $w = document.getElementById('w'),
        $h = document.getElementById('h'),
        tabs = $calc.getElementsByTagName('li'),
        $submit = document.getElementById('submit'),
        $deck_3 = document.getElementById('deck_3'),
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

        $label_2.textContent = label

        new BuildInput(selectVal($options_1)[3], selectVal($options_1)[5])
        labelBild($select_1, $label_2)

        UserP.func_S()
    }

    UserP.func_S()
    labelBild($select_1, $label_2)

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
            const result = confirm()

            if (result) {
                localStorage.clear()
                location.reload()
            }
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
        }

        // Клик удалить User из firebase
        if (t.className == 'userTableRemove') {
            UserP.func_userTableRemove(t)
        }

        // Клик развернуть / скрыть каталог
        if (t.className == 'badg') {
            const $catalog = document.querySelector('.catalog')
            $catalog.classList.toggle('hidden')
        }
    })

    $select_1.onchange = () => {
        new BuildStorageSelect(
            'options_1',
            ADMIN.googleList[2].list,
            $select_1.value
        )

        new BuildInput(selectVal($options_1)[3], selectVal($options_1)[5])

        UserP.func_S()
        labelBild($select_1, $label_2)
    }

    $options_2.onchange = () => {
        UserP.func_S()
    }

    $options_1.onchange = (e) => {
        new BuildInput(selectVal(e.target)[3], selectVal(e.target)[5])
        UserP.func_S()
    }

    $w.oninput = () => {
        UserP.func_S()
    }

    $h.oninput = () => {
        UserP.func_S()
    }

    $options_p.oninput = () => {
        UserP.func_S()
    }

    $submit.onclick = tableBuild

    function tableBuild(e) {
        e.preventDefault()

        UserP.func_Table()

        if ($deck_3.textContent != 0) noticBuild(ADMIN.notic.table)
    }

    time('deck_6')

    firebaseCatalog()
}
