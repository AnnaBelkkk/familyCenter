
import {pageStandart, pageSlider, pageImgText, url,urlId, urlAdres} from '/script/scriptPageTransition.js'
import baseBlocks from "../db_baseBlocks.json";
import blockslinks from "../blocks.json";
// console.log(blocks, baseBlocks)

// export function open(str, a = '=') {
//     let res = str.substring(str.lastIndexOf(a) + 1)
//     return res != str ? res : false;
// }
// let url = window.location.href.toString();
// // console.log(url)
// let urlId = open(url);
// // console.log(urlId)
// let urlAdres = url.slice(-10, -10)
// // console.log(urlAdres)
//
// export function change() {
//     let menuItems = document.querySelectorAll('.dropdown-item');
//     let titleNav = document.querySelector('.title_nav');
//     menuItems.forEach(item => {
//         if (item.id === urlId) {
//             // console.log(item.textContent);
//             titleNav.id = item.id;
//             titleNav.textContent = item.textContent
//         }
//     });
// }
//export {url,urlId, urlAdres}

function back() {
    history.back();
}
let text;
let img;
let main_blocks = document.querySelector('.main__block')
let arrayValue = baseBlocks.baseBlocks[urlId]
let content_block = document.getElementById('content_block')
let createTitle = document.createElement('div')
let array ;
let count = 1;
let blocks = blockslinks.blockslinks
let blocksTwo;
console.log(blocks)

if (urlId === 'base' || urlId === 'structure' || urlId === 'documents' || urlId === 'educations'|| urlId === 'educationStandart' || urlId === 'teacher'|| urlId === 'security' || urlId ==='scholarship' || urlId === 'available' || urlId === 'international'){
    blocksTwo = blockslinks.blockslinks[urlId][0]
    array = blocksTwo;
    console.log(array)

} else {
    array = arrayValue[0];
}
if (array.block != undefined ){
    console.log(array.block)
    text = array.block.textContent;
    img = array.block.images
    console.log(img)
}


if (urlId === 'news') {
    pageStandart(arrayValue,array,main_blocks)
} else if (urlId === 'intelligence' || urlId === 'organization' || urlId === 'social' ||  urlId === 'education'||  urlId === 'help' || urlId === 'schedule' ||urlId === 'service' || urlId === 'medical' || urlId === 'contacts'){
    pageImgText(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img)

} else if (urlId === 'spiritual' || urlId === 'thank'){
    pageSlider(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img)
} else if (urlId === 'base'|| urlId === 'structure' || urlId === 'documents'|| urlId === 'educations' || urlId === 'educationStandart' || urlId === 'teacher'|| urlId === 'security' || urlId ==='scholarship' || urlId === 'international'){
    pageImgText(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img)
} else if(urlId === 'available'){
    pageSlider(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img)
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
// })0

