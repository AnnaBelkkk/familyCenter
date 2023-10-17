import blocks from '../blocks.json'

import baseBlocks from '../db_baseBlocks.json';

console.log(blocks, baseBlocks)

function open(str, a = '=') {
    let res = str.substring(str.lastIndexOf(a) + 1)
    return res != str ? res : false;
}

let url = window.location.href.toString();
console.log(url)
let urlId = open(url);
console.log(urlId)
let urlAdres = url.slice(-10, -10)
console.log(urlAdres)


function back() {
    history.back();
}

let menuItems = document.querySelectorAll('.dropdown-item');
let titleNav = document.querySelector('#select_home');
menuItems.forEach(item => {
    if (item.id === urlId) {
        console.log(item.textContent);
        titleNav.id = item.id;
        titleNav.textContent = item.textContent
    }
});
const main_container = document.querySelector('.main_container')
let main_blocks = document.querySelector('.main__block')
let arrayValue = baseBlocks.baseBlocks[urlId]
let array = arrayValue[0]
if (urlId === 'news') {
    main_blocks.innerHTML = ''
    main_container.style.background = '#6C584F';
    main_blocks.style.height = '5514px'
    console.log(arrayValue[0].block1.textContent.text1)
    console.log(arrayValue[0].block1.images.img1)
    console.log(arrayValue)
    for (let i in array) {
        console.log(i, array[i].textContent)
        main_blocks.innerHTML += `
        <div class="card" id="${i}">
            <img  src="../${array[i].images.img1}" class = "img_card">
            <div class="text_content_card">
                <div class="title_card">${array[i].title}</div>
                <div class="text_card">${array[i].textContent.text1}</div>
            </div>       
        </div>
        `
    }
} else if (urlId === 'intelligence'){
    main_blocks.innerHTML = ''
    main_container.style.background = '#363B39';
    main_blocks.style.height = '1080px'
    let arrayValue = baseBlocks.baseBlocks[urlId]
    console.log(arrayValue)
    let text = forEach.array.block.textContent
    console.log(text)
    for (let i in array) {
        console.log(i, array[i].textContent)
        main_blocks.innerHTML += `
        <div class="intrelligence" id="${i}">
            <div class="text_content_card">
                <div class="title_intrelligence">${array[i].title}</div>
                <div class="text_intrelligence"></div>
            </div>       
        </div>
        `
    }
}


// let isVisuallyEnabled = false;
// let visually = document.getElementById('visually')
// visually.addEventListener('click', function (){
//     const main_container = document.querySelector('.main_container')
//     let card = document.querySelectorAll('.card')
//     isVisuallyEnabled = !isVisuallyEnabled;
//     if (isVisuallyEnabled) {
//         card.style.backgroundColor = '#6C584F'
//         main_container.style.backgroundColor = '#6C584F'
//         document.body.style.color = '';
//     } else {
//         card.style.backgroundColor = 'black'
//         main_container.style.backgroundColor = 'black'
//     }
// })

