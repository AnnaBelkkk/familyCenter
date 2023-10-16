'use strict';


import {
    news,
    intelligence,
    organization,
    spiritual,
    service,
    opposition,
    medical,
    social,
    educational,
    thank,
    contacts,
    help,
    schedule
} from '../db_baseBlocks.json' assert {type: 'json'};

import {
    base,
    structure,
    documents,
    education,
    educationStandart,
    teacher,
    security,
    scholarship,
    available,
    international
} from '../blocks.json' assert {type: 'json'};

let arrayBaseBlocks = {
    news,
    intelligence,
    organization,
    spiritual,
    service,
    opposition,
    medical,
    social,
    educational,
    thank,
    contacts,
    help,
    schedule
};
console.log(arrayBaseBlocks)

let arrayBlocks = {
    base,
    structure,
    documents,
    education,
    educationStandart,
    teacher,
    security,
    scholarship,
    available,
    international
}
console.log(arrayBlocks)


let data;

async function sendRequest(method, url, data = null) {
    let config = {
        method: method
    }
    if (data != null) {
        config.headers = {
            "Content-Type": "application/json"
        },
            config.body = JSON.stringify(data);
    }
    let res = await fetch(url, config);
    if (res.ok) {
        return await res.json();
    } else {
        console.log('error')
    }
}

//  async function DataBlocks() { //первичное наполнение, собираем товары через запрос
//     data = await sendRequest('GET', 'https://jumpy-entertaining-judge.glitch.me/api/blocks/');
//     // console.log(data[0].base)
// }
// DataBlocks()

async function a() {
    let menuItems = document.querySelectorAll('.dropdown-item');
    console.log(menuItems)
// Получаем элемент с классом "title_nav"
    let titleNav = document.querySelector('#select_home');
    let titleNav2 = document.querySelector('#select_home');
    console.log(titleNav.textContent)
    console.log(titleNav.id)
// Добавляем обработчик события клика на каждый пункт меню
    menuItems.forEach(function (item) {
        item.addEventListener('click', async function (event) {
            // Отменяем стандартное действие ссылки
            event.preventDefault();

            // Получаем текст выбранного пункта меню
            let menuItemText = item.textContent;
            titleNav = item.id;
            let arrayValue = arrayBaseBlocks[titleNav]
            console.log(arrayValue)

            console.log(arrayBaseBlocks)
            console.log(item, item.textContent, item.id)

        });
    })

}

//https://jumpy-entertaining-judge.glitch.me/api/blocks/
//https://rowan-glossy-fruit.glitch.me/api/baseBlocks/
a()


