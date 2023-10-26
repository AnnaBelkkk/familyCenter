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


Scrolling()
changingTextValueTheDrop_DawnMenu()

