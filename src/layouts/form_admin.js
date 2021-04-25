export default `
<div class="form-modal" id="loginModal">
    <div class="header">
        <ul class="header__ul" id="loginWrap">
            <li class="active" id="login" data-text="Войти">Вход</li>
            <li id="register"  data-text="Регистрация">Регистрация</li>
        </ul>
    </div>
    <form id="formModal" class="body">
        <div class="col">
            <label for="form-modal__email">Email</label>
            <input class="input" type="text" id="form-modal__email" />
        </div>
        <div class="col">
            <label for="form-modal__password">Пароль</label>
            <input
                class="input"
                type="password"
                id="form-modal__password"
            />
        </div>
        <div style="text-align: center">
            <button id="formModalSubmit" data-action="login" class="btn-g">Войти</button>
        </div>
    </form>
</div>
`.trim()
