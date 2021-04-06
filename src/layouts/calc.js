export default `
<div class="container">
    <div class="grid col-xm">
        <form class="wrap" id="calc">
            <div class="form__col">
                <div class="header">
                    <ul class="header__ul tabs"></ul>
                </div>
                <div class="body">
                    <div class="grid">
                        <div class="col">
                            <label for="select_1"
                                >Наименование услуги</label
                            >
                            <select name="" id="select_1"></select>
                        </div>
                        <div class="col">
                            <label for="options_2" id="label_2"
                                >Утепление</label
                            >
                            <select name="" id="options_2"></select>
                        </div>
                    </div>

                    <div class="grid">
                        <div class="col">
                            <label for="options_1">Материал</label>
                            <select name="" id="options_1"></select>
                        </div>

                        <div class="col w-40">
                            <label for="options_p">Стоимость услуги</label>
                            <input class="input" id="options_p"  type="number" onFocus="this.select()">
                        </div>
                    </div>

                    <div class="grid">
                        <div class="col">
                            <label for="h">Длина</label>
                            <input
                                type="number"
                                value="3000"
                                class="input"
                                id="h"
                                onFocus="this.select()"
                            />
                        </div>

                        <div class="col">
                            <label for="w">Высота/Ширина</label>
                            <input
                                type="number"
                                value="1000"
                                class="input"
                                id="w"
                                onFocus="this.select()"
                            />
                        </div>
                    </div>
                    <label class="onoffswitch-wrap">
					<span class="onoffswitch">
						<input type="checkbox" id="duble" class="onoffswitch-checkbox" checked>
						<span class="onoffswitch-label">
							<span class="onoffswitch-inner"></span>
							<span class="onoffswitch-switch"></span>
						</span>
					</span>
					<span>Группировать таблицу</span>
				</label>
                </div>
                <div class="footer">
                    <div class="footer__grid">
                        <div class="footer__col">
                            <div class="grid">
                                <div></div>
                                <div class="footer__desc hidden-xs">
                                    № <span id="deck_1">1</span>
                                </div>
                                <div class="footer__desc">
                                    S: <span id="deck_2"></span>
                                    <span id="deck_2_2"></span>
                                </div>
                                <div class="footer__desc">
                                    <span
                                        id="deck_3"
                                        data-c=""
                                        data-c-u=""
                                    ></span>
                                    р.
                                </div>

                                <div class="footer__desc">
                                    Σ
                                    <span id="deck_4">0</span>
                                    р.
                                </div>
                            </div>
                        </div>
                        <div class="footer__col">
                            <button type="submit" id="submit">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fal"
                                    data-icon="long-arrow-right"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    class="svg-inline--fa fa-w-14 fa-2x"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flag hidden">
                <div class="col">
                    <h2>Сохранённые заказы</h2>
                </div>

                <table class="fb-table catalog">
                    <tbody id="catalog"></tbody>
                </table>
            </div>
        </form>

        <div class="wrap">
            <div class="fb-table__wrap" id="print">
                <ul class="slid">
                    <li class="tableNavR" title="Очистить память"></li>
                    <li class="tableNavS" title="Сохранить расчет"></li>
                    <li
                        class="tableNavP"
                        title="Распечатать спецификацию"
                    ></li>
                </ul>
                <div class="fb-table__section">
                    <h3 class="fb-table__h">
                        Спецификация №
                        <span id="deck_5" class="fbModal">133</span> от
                        <span id="deck_6" class="fbModal"></span>
                    </h3>
                    <p class="fb-table__p">
                        Адрес: <span class="fbModal" id="deck_7"></span>
                    </p>
                </div>
                <div class="overlow">
                    <table class="fb-table">
                        <thead>
                            <tr>
                                <th
                                    style="
                                        text-align: center;
                                        width: 1px;
                                    "
                                >
                                    #
                                </th>
                                <th>Вид работ</th>
                                <th style="min-width: 150px">
                                    Материал
                                </th>
                                <th
                                    style="
                                        text-align: center;
                                        width: 1px;
                                    "
                                    colspan="2"
                                >
                                    Ед.изм
                                </th>
                                <th
                                    style="
                                        text-align: center;
                                        width: 1px;
                                    "
                                >
                                    Сумма
                                </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="table"></tbody>
                    </table>
                </div>
                <div class="fb-table__section">
                    <h3 class="fb-table__h">
                        Итого стоимость заказа:
                        <span id="tableSumm">0</span> рублей
                    </h3>
                    <div class="fb-table__bg">
                        <p class="fb-table__bg-p">
                            <b>Примечание:</b><br />
                            <span class="fbModal" id="deck_8"
                                >Сумма указана с учетом стоимости
                                материала.</span
                            >
                        </p>
                    </div>
                    <p class="fz-m">
                        С внутренними размерами в спецификации Заказчик
                        согласен.С функциональным значением всех
                        элементов изделия Заказчик согласен. Все
                        интересующие Заказчика вопросы ему разъяснены.
                    </p>
                    <p class="fb-table__p">
                        Исполнитель:
                        <span class="fbModal" id="deck_9"></span>
                    </p>
                    <p class="fb-table__p">
                        Заказчик:
                        <span class="fbModal" id="deck_10"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
        `.trim()
