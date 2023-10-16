//прокрутка на сайте
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


function changingTextValueTheDrop_DawnMenu() {
// Получаем все пункты меню
    let menuItems = document.querySelectorAll('.dropdown-item');
    console.log(menuItems)
// Получаем элемент с классом "title_nav"
    let titleNav = document.querySelector('#select_home');
    let titleNav2 = document.querySelector('#select_home');
    console.log(titleNav.textContent)
    console.log(titleNav.id)
// Добавляем обработчик события клика на каждый пункт меню
    menuItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            // Отменяем стандартное действие ссылки
            event.preventDefault();

            // Получаем текст выбранного пункта меню
            let menuItemText = item.textContent;
            console.log(item, item.textContent, item.id)
            // Меняем текст элемента "a" с классом "title_nav"
            titleNav.textContent = menuItemText;
            titleNav.id = item.id;
        });
    })
}


Scrolling()
changingTextValueTheDrop_DawnMenu()

