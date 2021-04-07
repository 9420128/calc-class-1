import { ADMIN } from '../admin'

export const contact_js = () => {
    function contactBuild() {
        const $table_contact = document.getElementById('table_contact')
        let html = ''

        ADMIN.contact.forEach((el) => {
            html += `<tr>
                        <td>${el.name}</td>
                        <td style="width: 100%;">${el.val}</td>
                    </tr>`
        })

        $table_contact.insertAdjacentHTML('beforeend', html)
    }

    contactBuild()
}
