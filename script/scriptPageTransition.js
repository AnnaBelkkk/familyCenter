import baseBlocks from "../db_baseBlocks.json";
import blockslinks from "../blocks.json"
//import {url, urlId, urlAdres, change, open} from "./scriptPage.js"
export function open(str, a = '=') {
    let res = str.substring(str.lastIndexOf(a) + 1)
    return res != str ? res : false;
}
let url = window.location.href.toString();
// console.log(url)
let urlId = open(url);
// console.log(urlId)
let urlAdres = url.slice(-10, -10)
// console.log(urlAdres)

export function change() {
    let menuItems = document.querySelectorAll('.dropdown-item');
    let titleNav = document.querySelector('.title_nav');
    menuItems.forEach(item => {
        if (item.id === urlId) {
            // console.log(item.textContent);
            titleNav.id = item.id;
            titleNav.textContent = item.textContent
        }
    });
}
change()
export {url,urlId, urlAdres}
export function pageStandart(arrayValue,array,main_blocks){
    // let main_blocks = document.querySelector('.main__block')
    // let arrayValue = baseBlocks.baseBlocks[urlId]
    // let array = arrayValue[0]
    main_blocks.innerHTML = ''
    main_blocks.classList.add(`${urlId}`)
    //console.log(arrayValue)
    for (let i in array) {
        //console.log(i, array[i].textContent)
        main_blocks.innerHTML += `
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <img  src="../${array[i].images.img1}" class = "img_${urlId}">
            <div class="text_content_${urlId} itemcard" >
                <div class="title_${urlId} itemttile">${array[i].title}</div>
                <div class="text_${urlId} itemtext">${array[i].textContent.text1}</div>
            </div>       
        </div>
        `
    }
}


export function pageImgText(main_blocks, arrayValue,  content_block, createTitle, array, count, blocks, text, img){
    // let main_blocks = document.querySelector('.main__block')
    // let arrayValue = baseBlocks.baseBlocks[urlId]

    // let array = arrayValue[0]
    // let count = 1;
    // let blocks = blockslinks.blockslinks


    // let content_block = document.getElementById('content_block')
    // let createTttile = document.createElement('div')
    // let text = array.block.textContent
    // let img = array.block.images
    content_block.innerHTML = ''
    content_block.classList.add(`${urlId}`)
    createTitle.classList.add(`title_block_${urlId}`)
    createTitle.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTitle.classList.add('itemtitlebefore')
    if (array.block!= undefined){
        createTitle.textContent = array.block.title
    } else {
        console.log(array)
        console.log(array.urlId)
    }
    //createTttile.textContent = array.block.title
    content_block.append(createTitle)
    let images = document.createElement('div')
    images.classList.add(`images_${urlId}`)
    for (let i in text) {
        content_block.innerHTML += `
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>       
        </div>
        `
    }
    let itemcard_content = document.querySelector('.itemcard_content')
    console.log(itemcard_content)
    if (img !== undefined) {
        for (let i in img) {
            console.log(i)
            images.innerHTML += ` 
                 <img src="../image/${urlId}${count}.png" class="img_${urlId}">
        `
            count++
            itemcard_content.append(images)
        }
    }
    if (urlId === 'intelligence'){
        let aId = document.querySelectorAll('.a_intelligence')
        let arrayBlocks = ['base', 'structure','documents','educations', 'educationStandart', 'teacher','security', 'scholarship', 'available','international']
        for (const [index, element] of aId.entries()) {
            element.id = arrayBlocks[index];
            element.href = `../pageTransition/index.html?=${arrayBlocks[index]}`
        }
    } else if (urlId === 'contacts'){
        console.log(123456789)
        let imagesCardContact = document.createElement('div')
        imagesCardContact.classList.add('images_contacts')
        content_block.append(imagesCardContact)
        let images_contacts = document.querySelector('.images_contacts')
        images_contacts.innerHTML=''
        let map;
        function maps(){
            map = new ymaps.Map(images_contacts, {
                center: [56.339831, 38.140545],
                zoom: 16
            });
        }
        ymaps.ready(maps);
    }else if(urlId === 'base' || urlId === 'structure'|| urlId === 'documents' || urlId === 'educations'|| urlId === 'educationStandart' || urlId === 'teacher'|| urlId === 'security' || urlId ==='scholarship' || urlId === 'available' || urlId === 'international' ){
        debugger
        let itemtitlebefore = document.getElementById(`${urlId}`)
        let arrowImgBtn = document.createElement('button')
        arrowImgBtn.classList.add('arrow_back')
        let arrowImg = document.createElement('img')
        arrowImgBtn.append(arrowImg)
        arrowImg.src = '../img/arrowBack.png'
        arrowImg.classList.add('imgArrowBack')
        itemtitlebefore.append(arrowImgBtn)
        arrowImgBtn.addEventListener('click', e =>{
            history.back()
        })
    }
}

export function pageSlider(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img){
    // let main_blocks = document.querySelector('.main__block')
    // let arrayValue = baseBlocks.baseBlocks[urlId]
    // let array = arrayValue[0]
    // let content_block = document.getElementById('content_block')
    // let createTttile = document.createElement('div')
    content_block.innerHTML = ''
    // let text = array.block.textContent
    content_block.classList.add(`${urlId}`)
    createTitle.classList.add(`title_block_${urlId}`)
    createTitle.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTitle.classList.add('itemtitlebefore')

    // createTitle.textContent = array.block.title
    if (array.block!= undefined){
        createTitle.textContent = array.block.title
    } else {
        console.log(array)
        console.log(array.urlId)
    }
    content_block.append(createTitle)
    if (urlId === 'spiritual') {
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_${urlId} ">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="siderImg_${urlId}" src="../image/${urlId}1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}3.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>       
        </div>
        `
        }
    }else if (urlId === 'available') {
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_${urlId} ">
                        <div class="carousel-inner">
                            <div class="carousel-item active carousel-item_available">
                                <img class="siderImg_${urlId}" src="../image/${urlId}1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}3.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}4.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/${urlId}5.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>       
        </div>
        `
        }
    }else if(urlId === 'thank'){
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_${urlId} ">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="siderImg_${urlId}" src="../image/thankimg1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/thankimg2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/thankimg3.png" class="d-block w-100" alt="...">
                            </div>
                             <div class="carousel-item">
                                <img class="siderImg_${urlId}" src="../image/thankimg4.png" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                                data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
        `
        }
    } if( urlId === 'available' ){
        debugger
        let itemtitlebefore = document.getElementById(`${urlId}`)
        let arrowImgBtn = document.createElement('button')
        arrowImgBtn.classList.add('arrow_back')
        let arrowImg = document.createElement('img')
        arrowImgBtn.append(arrowImg)
        arrowImg.src = '../img/arrowBack.png'
        arrowImg.classList.add('imgArrowBack')
        itemtitlebefore.append(arrowImgBtn)
        arrowImgBtn.addEventListener('click', e =>{
            history.back()
        })
    }
}




