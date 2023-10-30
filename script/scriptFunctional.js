'use strict';
import { urlId} from '/script/scriptPageTransition.js'
//
// import blocks  from '../blocks.json'
//
// import baseBlocks  from '../db_baseBlocks.json';
// console.log(blocks, baseBlocks)
//

async function a() {
    let menuItems = document.querySelectorAll('.dropdown-item');
    console.log(menuItems)
// Получаем элемент с классом "title_nav"
    let titleNav = document.querySelector('#select_home');
// Добавляем обработчик события клика на каждый пункт меню
    menuItems.forEach(function (item) {
        item.addEventListener('click', async function (event) {
            // Отменяем стандартное действие ссылки
            event.preventDefault();
            window.location.href = item.href
            // Получаем текст выбранного пункта меню
            let menuItemText = item.textContent;
            titleNav = item.id;
            // let arrayValue = baseBlocks.baseBlocks[titleNav]
            // console.log(arrayValue)


        });
    })

}

//https://jumpy-entertaining-judge.glitch.me/api/blocks/
//https://rowan-glossy-fruit.glitch.me/api/baseBlocks/
a()

window.addEventListener('resize', function() {
    let screenWidth = window.innerWidth;
    let titleNav = document.getElementById(`${urlId}`);
    if (screenWidth <= 1060) {
        let words = titleNav.innerText.split(' ');
        titleNav.innerText = words[0];
    // } else if(screenWidth > 1060){
    //     titleNav.innerText = titleNav.textContent;
    }else {
        titleNav.innerText = titleNav.textContent;
    }

});