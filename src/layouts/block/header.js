export default `
   <div class="container">
            <div class="grid logo__row">
                <h1 class="title"><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-money-check fa-w-20"><path fill="currentColor" d="M624 32H16C7.16 32 0 39.16 0 48v400c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V48c0-8.84-7.16-16-16-16zm-32 400H48V176h544v256zm0-304H48V80h544v48zM104 384h144c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm352 0h80c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8h-80c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm-352-96h272c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm360 0h64c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16z" class=""></path></svg></span> Калькулятор</h1>
                <!-- <a href="/" class="logo"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 30 30"
                        class="svg-inline--fa logo-f fa-w-16 fa-2x"
                    >
                        <g fill="currentColor">
                            <path
                                d="M0 0h13v13H0zM0 17h13v13H0zM17 17h13v13H17zM17 0h13v13H17z"
                            ></path>
                        </g>
                        <path fill="#FF6500" d="M17 0h13v13H17z"></path>
                    </svg>
                </a>
                -->
                <div class="nav">
                    <button class="nav__login" title="Войти"></button>
                    <button class="nav__btn"></button>

                    <nav class="nav__nav">
                        <a class="nav__link active" name="calc"><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-money-check fa-w-20"><path fill="currentColor" d="M624 32H16C7.16 32 0 39.16 0 48v400c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V48c0-8.84-7.16-16-16-16zm-32 400H48V176h544v256zm0-304H48V80h544v48zM104 384h144c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm352 0h80c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8h-80c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm-352-96h272c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8zm360 0h64c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16z" class=""></path></svg></span> Калькулятор</a>

                        <a class="nav__link" name="price"><span><svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-th-list fa-w-16"><path fill="currentColor" d="M0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80zm472 224H197.333v-96H472v96zm0 40v84c0 6.627-5.373 12-12 12H197.333v-96H472zM40 208h117.333v96H40v-96zm157.333-40V72H460c6.627 0 12 5.373 12 12v84H197.333zm-40-96v96H40V84c0-6.627 5.373-12 12-12h105.333zM40 344h117.333v96H52c-6.627 0-12-5.373-12-12v-84z"></path></svg></span> Прайс</a>

                        <a class="nav__link" name="contact"><span><svg aria-hidden="true" focusable="false"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-w-18"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path></svg></span> Контакты </a>
                    </nav>
                </div>
            </div>
        </div>
 
`.trim()
