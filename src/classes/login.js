import { login, logout, register } from '../store/auth'

export class Login {
    func_login(el) {
        const html = import('../layouts/form_admin')
        const formModalNameWrap = `
        <div class="col" id="formModalNameWrap">
            <label for="form-modal__name">Имя</label>
            <input class="input" type="text" id="form-modal__name" />
        </div>`

        const renderPage = async (html) => {
            const template = await html

            document.body.insertAdjacentHTML('afterbegin', template.default)

            const subm = document.getElementById('formModalSubmit')
            const login = document.getElementById('login')
            const register = document.getElementById('register')

            login.onclick = locinClick
            register.onclick = registerClick

            subm.onclick = modalSubmit

            // console.log(subm)
        }

        renderPage(html)

        function locinClick(e) {
            tabActive(e.target)

            const formModalNameWrap = document.querySelector(
                '#formModalNameWrap'
            )

            if (formModalNameWrap) formModalNameWrap.remove()
        }

        function registerClick(e) {
            tabActive(e.target)

            const $formModalNameWrap = document.querySelector(
                '#formModalNameWrap'
            )

            if (!$formModalNameWrap)
                document
                    .querySelector('#formModal')
                    .insertAdjacentHTML('afterbegin', formModalNameWrap)
        }

        function tabActive(el) {
            const active = document.querySelector('#loginWrap>li.active')
            const subm = document.getElementById('formModalSubmit')

            if (el === active) return

            el.classList.add('active')
            active.classList.remove('active')
            subm.innerText = el.dataset.text
            subm.dataset.action = el.id
        }

        async function modalSubmit(e) {
            e.preventDefault()
            const loginModal = document.getElementById('loginModal')
            const form = document.getElementById('formModal')
            const name = document.getElementById('form-modal__name')
            const mail = document.getElementById('form-modal__email')
            const pass = document.getElementById('form-modal__password')
            const action = e.target.dataset.action

            if (!mail.value || !pass.value) return

            const formData =
                action === 'login'
                    ? {
                          email: mail.value,
                          password: pass.value,
                      }
                    : {
                          email: mail.value,
                          password: pass.value,
                          name: name.value,
                      }

            try {
                if (action === 'login') await login(formData)
                else await register(formData)

                loginModal.remove()
                el.classList.remove('nav__login')
                el.classList.add('nav__logaut')
                el.setAttribute('title', 'Выйти')
            } catch (e) {}
        }
    }

    func_logaut(el) {
        async function adminLogout() {
            await logout()
            el.classList.remove('nav__logaut')
            el.classList.add('nav__login')
            el.setAttribute('title', 'Войти')
        }

        adminLogout()
    }
}
