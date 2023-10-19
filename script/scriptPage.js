import blocks from '../blocks.json'

import baseBlocks from '../db_baseBlocks.json';
import {pageLinks, pageStandart, pageSlider, pageImg} from '/script/scriptPageTransition.js'
console.log(blocks, baseBlocks)

export function open(str, a = '=') {
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
// export function change() {
//     let menuItems = document.querySelectorAll('.dropdown-item');
//     let titleNav = document.querySelector('#select_home');
//     menuItems.forEach(item => {
//         if (item.id === urlId) {
//             console.log(item.textContent);
//             titleNav.id = item.id;
//             titleNav.textContent = item.textContent
//         }
//     });
// }
// change()

if (urlId === 'news') {
    pageStandart()
} else if (urlId === 'intelligence' || urlId === 'organization' || urlId === 'social' ||  urlId === 'education'||  urlId === 'help' || urlId === 'schedule'){
  pageLinks()

} else if (urlId === 'spiritual' || urlId === 'thank'){
    pageSlider()
}else if (urlId === 'service' || urlId === 'medical' || urlId === 'contacts'){
    pageImg()
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

