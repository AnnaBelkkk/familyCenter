//прокрутка на сайте
//эта функция убирает скрол на сайте и более плавно и красиво делает переход между блоками на главной странице
function Scrolling() {
    const blocksContainer = document.querySelector('.main__blocks');
    const blocks = document.querySelectorAll('.block_item');

    let currentBlockIndex = 0;

    blocksContainer.addEventListener('wheel', (e) => {
        e.preventDefault();

        const delta = e.deltaY;

        if (delta > 0 && currentBlockIndex < blocks.length - 1) {
            currentBlockIndex++;
        } else if (delta < 0 && currentBlockIndex > 0) {
            currentBlockIndex--;
        }

        blocks[currentBlockIndex].scrollIntoView({behavior: 'smooth'});
    });
}

//эта функция меняет содержание айди и тескта в выпадающем меню
export function changingTextValueTheDrop_DawnMenu() {
    let menuItems = document.querySelectorAll('.dropdown-item');
    let titleNav = document.querySelector('#select_home');
    let titleNav2 = document.querySelector('#select_home');
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            // Отменяем стандартное действие ссылки
            event.preventDefault();
            let menuItemText = item.textContent;
            titleNav.textContent = menuItemText;
            titleNav.id = item.id;
        });
    })
}



function darkLightmode  ()  {
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
    input_search.style.fontSize ='25px'

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

    let carousel  = document.querySelector('.carousel')
    carousel.classList.toggle('displayNone', !drmode)
    localStorage.setItem('theme', !drmode); //по умолчанию
}

let visually = document.getElementById('visually')
visually.addEventListener('click', function () {
    darkLightmode()
})

const def = () => {

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
    input_search.style.fontSize ='25px'

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

    let carousel  = document.querySelector('.carousel')
    carousel.classList.toggle('displayNone', localStorage.getItem('theme') === 'true')

}
document.addEventListener('DOMContentLoaded', def);
Scrolling()
changingTextValueTheDrop_DawnMenu()

