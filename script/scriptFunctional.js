'use strict';


//функция для смены url адреса
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
a()


let visually = document.getElementById('visually')
visually.addEventListener('click', function () {
    darkLightmode()
})


let title_nav = document.querySelector('.title_nav')
let home = document.getElementById('home')
console.log(title_nav.id, home)
//функция смены темы для версии слабовидящих
function darkLightmode  ()  {
    if (title_nav.id === 'select_home' || title_nav.id === 'home') {
        let drmode = localStorage.getItem('theme') === 'true';
        let main__block_one = document.querySelector('.main__block_one')
        main__block_one.classList.toggle('VersionOfVisuallyText', !drmode)
        let main__block_two = document.querySelector('.main__block_two')
        main__block_two.classList.toggle('VersionOfVisuallyTextThreeBlock', !drmode)
        let main__block_three = document.querySelector('.main__block_three')
        main__block_three.classList.toggle('VersionOfVisuallyText', !drmode)
        let main__block_four = document.querySelector('.main__block_four')
        main__block_four.classList.toggle('VersionOfVisuallyText', !drmode)

        let text_block = document.querySelector('.text_block')
        text_block.classList.toggle('VersionOfVisuallyTextTwo', !drmode)

        let block_one_textcontent = document.querySelector('.block_one_textcontent')
        block_one_textcontent.classList.toggle('VersionOfVisuallyTextTwo', !drmode)

        let text_block_two = document.querySelector('.text_block_two')
        text_block_two.classList.toggle('VersionOfVisuallyTextThree', !drmode)

        let text_block_three = document.querySelector('.text_block_three')
        text_block_three.classList.toggle('VersionOfVisuallyTextFour', !drmode)

        let block_three_textcontent = document.querySelector('.block_three_textcontent')
        block_three_textcontent.classList.toggle('VersionOfVisuallyTextFour', !drmode)

        let block_text_four = document.querySelector('.block_text_four')
        block_text_four.classList.toggle('VersionOfVisuallyTextThree', !drmode)

        let visually_text = document.querySelector('.visually_text')
        visually_text.classList.toggle('VersionOfVisuallyText', !drmode)

        let title_nav = document.querySelector('.title_nav')
        title_nav.classList.toggle('VersionOfVisuallyText', !drmode)

        // const main_container = document.querySelector('.main_container')
        // main_container.classList.toggle('VersionOfVisuallyText', !drmode)
        let input_search = document.querySelector('.input_search')
        input_search.style.fontSize = '25px'

        let footer__container = document.querySelector('.footer__container ')
        footer__container.classList.toggle('visuallytextmode', !drmode)

        let footer_text = document.querySelector('.footer_text')
        footer_text.classList.toggle('visuallytextmode', !drmode)

        let block_one_img = document.querySelector('.block_one_img')
        block_one_img.classList.toggle('displayNone', !drmode)

        let block_two_img = document.querySelector('.block_two_img')
        block_two_img.classList.toggle('displayNone', !drmode)

        let block_three_img = document.querySelector('.block_three_img')
        block_three_img.classList.toggle('displayNone', !drmode)

        let carousel = document.querySelector('.carousel')
        carousel.classList.toggle('displayNone', !drmode)

        localStorage.setItem('theme', !drmode); //по умолчанию
    }else{
        let drmode = localStorage.getItem('theme') === 'true';
        let main__block  = document.querySelector('.main__block')
        main__block.classList.toggle('VersionOfVisuallyText', !drmode)
        let itemtext = document.querySelector('.itemtext')
        itemtext.classList.toggle('VersText',!drmode)
        let footer__container = document.querySelector('.footer__container ')
        footer__container.classList.toggle('visuallytextmode', !drmode)

        let footer_text = document.querySelector('.footer_text')
        footer_text.classList.toggle('visuallytextmode', !drmode)
        localStorage.setItem('theme', !drmode); //по умолчанию
    }
}



const def = () => {
    if (title_nav.id === 'select_home' || title_nav.id === 'home') {
        let main__block_one = document.querySelector('.main__block_one')
        main__block_one.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')
        let main__block_two = document.querySelector('.main__block_two')
        main__block_two.classList.toggle('VersionOfVisuallyTextThreeBlock', localStorage.getItem('theme') === 'true')
        let main__block_three = document.querySelector('.main__block_three')
        main__block_three.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')
        let main__block_four = document.querySelector('.main__block_four')
        main__block_four.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')

        let text_block = document.querySelector('.text_block')
        text_block.classList.toggle('VersionOfVisuallyTextTwo', localStorage.getItem('theme') === 'true')

        let block_one_textcontent = document.querySelector('.block_one_textcontent')
        block_one_textcontent.classList.toggle('VersionOfVisuallyTextTwo', localStorage.getItem('theme') === 'true')

        let text_block_two = document.querySelector('.text_block_two')
        text_block_two.classList.toggle('VersionOfVisuallyTextThree', localStorage.getItem('theme') === 'true')

        let text_block_three = document.querySelector('.text_block_three')
        text_block_three.classList.toggle('VersionOfVisuallyTextFour', localStorage.getItem('theme') === 'true')

        let block_three_textcontent = document.querySelector('.block_three_textcontent')
        block_three_textcontent.classList.toggle('VersionOfVisuallyTextFour', localStorage.getItem('theme') === 'true')

        let block_text_four = document.querySelector('.block_text_four')
        block_text_four.classList.toggle('VersionOfVisuallyTextThree', localStorage.getItem('theme') === 'true')

        let visually_text = document.querySelector('.visually_text')
        visually_text.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')

        let title_nav = document.querySelector('.title_nav')
        title_nav.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')

        // const main_container = document.querySelector('.main_container')
        // main_container.classList.toggle('VersionOfVisuallyText', !drmode)
        let input_search = document.querySelector('.input_search')
        input_search.style.fontSize = '25px'

        let footer__container = document.querySelector('.footer__container ')
        footer__container.classList.toggle('visuallytextmode', localStorage.getItem('theme') === 'true')

        let footer_text = document.querySelector('.footer_text')
        footer_text.classList.toggle('visuallytextmode', localStorage.getItem('theme') === 'true')

        let block_one_img = document.querySelector('.block_one_img')
        block_one_img.classList.toggle('displayNone', localStorage.getItem('theme') === 'true')

        let block_two_img = document.querySelector('.block_two_img')
        block_two_img.classList.toggle('displayNone', localStorage.getItem('theme') === 'true')

        let block_three_img = document.querySelector('.block_three_img')
        block_three_img.classList.toggle('displayNone', localStorage.getItem('theme') === 'true')

        let carousel = document.querySelector('.carousel')
        carousel.classList.toggle('displayNone', localStorage.getItem('theme') === 'true')
    } else {
        let main__block = document.querySelector('.main__block')
        main__block.classList.toggle('VersionOfVisuallyText', localStorage.getItem('theme') === 'true')
        let itemtext = document.querySelector('.itemtext')
        itemtext.classList.toggle('VersText',localStorage.getItem('theme') === 'true')
        let footer__container = document.querySelector('.footer__container ')
        footer__container.classList.toggle('visuallytextmode', localStorage.getItem('theme') === 'true')

        let footer_text = document.querySelector('.footer_text')
        footer_text.classList.toggle('visuallytextmode', localStorage.getItem('theme') === 'true')
    }

}
document.addEventListener('DOMContentLoaded', def);