export const ADMIN = {
    googleURL: {
        before:
            'https://spreadsheets.google.com/feeds/cells/1xJl4Kkeg5lJyq7Q8uSXi8wsrJcRhRdIvkJtb5ztDPMU/',
        after: '/public/full?alt=json',
    },
    KEY: ['fspb-options-', 'fspb-catalog', 'fspb-zakaz-'],
    tabs: [
        {
            value: 'steny',
            text: 'Отделка',
            dataId: '1',
            dataLabel: 'Утепление',
            activ: true,
        },
        {
            value: 'ostek',
            text: 'Остекление',
            dataId: '2',
            dataLabel: 'Установка водоотливов',
            activ: false,
        },
        {
            value: 'krish',
            text: 'Крыши',
            dataId: '3',
            dataLabel: 'Утепление крыши',
            activ: false,
        },
        {
            value: 'dopy',
            text: 'Прочее',
            dataId: '4',
            dataLabel: '-',
            activ: false,
        },
    ],
    googleList: [
        {
            el: 'select_1',
            list: 1,
            col: 3,
        },
        {
            el: 'options_2',
            list: 2,
            col: 7,
        },
        {
            el: 'options_1',
            list: 3,
            col: 7,
        },
    ],
    notic: {
        table: 'Данные добавлены',
        edit: 'Изменения сохранены',
        save: 'Расчет сохранен',
    },
    sroki: [
        {
            name: 'Отделка балкона до 20 м/кв',
            val: '1 день',
        },
        {
            name: 'Изготовление крыши',
            val: '1-7 дней',
        },
        {
            name: 'Выезд на замер',
            val: '1-3 дня',
        },
        {
            name: 'Срок выезда по претензиям',
            val: '1-14 дней',
        },
    ],
    contact: [
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="fal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-w-16"><path fill="currentColor" d="M493.09 351.3L384.7 304.8a31.36 31.36 0 0 0-36.5 8.9l-44.1 53.9A350 350 0 0 1 144.5 208l53.9-44.1a31.35 31.35 0 0 0 8.9-36.49l-46.5-108.5A31.33 31.33 0 0 0 125 .81L24.2 24.11A31.05 31.05 0 0 0 0 54.51C0 307.8 205.3 512 457.49 512A31.23 31.23 0 0 0 488 487.7L511.19 387a31.21 31.21 0 0 0-18.1-35.7zM456.89 480C222.4 479.7 32.3 289.7 32.1 55.21l99.6-23 46 107.39-72.8 59.5C153.3 302.3 209.4 358.6 313 407.2l59.5-72.8 107.39 46z"></path></svg>',
            val:
                '<a class="linc" target="_blank" rel="nofollow" href="tel:+79052088078">+7 (905) 208-80-78</a>',
        },
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-whatsapp fa-w-14"><path fill="#43d854" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>',
            val:
                '<a class="linc" target="_blank" href="https://api.whatsapp.com/send?phone=79052088078" rel="nofollow">+7 (905) 208-80-78</a>',
        },
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="vk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-vk fa-w-18 "><path fill="#45668e" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"></path></svg>',
            val:
                '<a class="linc" target="_blank" href="https://vk.com/id336668090" rel="nofollow">В контакте</a>',
        },
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="yandex" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-yandex fa-w-8"><path fill="#fc0" d="M153.1 315.8L65.7 512H2l96-209.8c-45.1-22.9-75.2-64.4-75.2-141.1C22.7 53.7 90.8 0 171.7 0H254v512h-55.1V315.8h-45.8zm45.8-269.3h-29.4c-44.4 0-87.4 29.4-87.4 114.6 0 82.3 39.4 108.8 87.4 108.8h29.4V46.5z" class=""></path></svg>',
            val:
                '<a class="linc" target="_blank" href="https://uslugi.yandex.ru/profile/EvgenijK-132698" rel="nofollow">Яндекс Услуги</a>',
        },
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-telegram-plane fa-w-14 "><path fill="#08c" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>',
            val:
                '<a class="linc" target="_blank" href=" https://telegram.me/Evg_Kot" rel="nofollow">@Evg_Kot</a>',
        },
        {
            name:
                '<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-clock fa-w-16"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" class=""></path></svg>',
            val: '<small class="muted">Пн-Вс с 10:00 до 20:00</smal>',
        },
    ],
    textFooter: 'Отделка балконов и лоджий',
}
