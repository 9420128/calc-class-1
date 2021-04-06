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
}
