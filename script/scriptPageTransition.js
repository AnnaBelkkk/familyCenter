import baseBlocks from "../db_baseBlocks.json";
import blocks from "../blocks.json";
import {open} from '/script/scriptPage.js'






//change()
export function pageStandart(){
    let main_blocks = document.querySelector('.main__block')
    let url = window.location.href.toString();
    console.log(url)
    let urlId = open(url);
    console.log(urlId)
    let urlAdres = url.slice(-10, -10)
    console.log(urlAdres)
    let arrayValue = baseBlocks.baseBlocks[urlId]
    let array = arrayValue[0]
    main_blocks.innerHTML = ''
    main_blocks.classList.add(`${urlId}`)
    console.log(arrayValue)
    for (let i in array) {
        console.log(i, array[i].textContent)
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

export function pageLinks(){
    let main_blocks = document.querySelector('.main__block')
    let url = window.location.href.toString();
    console.log(url)
    let urlId = open(url);
    console.log(urlId)
    let urlAdres = url.slice(-10, -10)
    console.log(urlAdres)
    let arrayValue = baseBlocks.baseBlocks[urlId]
    let array = arrayValue[0]
    let content_block = document.getElementById('content_block')
    let createTttile = document.createElement('div')
    let text = array.block.textContent
    content_block.innerHTML = ''
    content_block.classList.add(`${urlId}`)
    createTttile.classList.add(`title_block_${urlId}`)
    createTttile.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTttile.classList.add('itemtitlebefore')
    createTttile.textContent = array.block.title
    content_block.append(createTttile)

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
}

export function pageSlider(){
    let main_blocks = document.querySelector('.main__block')
    let url = window.location.href.toString();
    console.log(url)
    let urlId = open(url);
    console.log(urlId)
    let urlAdres = url.slice(-10, -10)
    console.log(urlAdres)
    let arrayValue = baseBlocks.baseBlocks[urlId]
    let array = arrayValue[0]
    let content_block = document.getElementById('content_block')
    let createTttile = document.createElement('div')
    content_block.innerHTML = ''
    let text = array.block.textContent
    content_block.classList.add(`${urlId}`)
    createTttile.classList.add(`title_block_${urlId}`)
    createTttile.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTttile.classList.add('itemtitlebefore')
    createTttile.textContent = array.block.title
    content_block.append(createTttile)
    if (urlId === 'spiritual') {
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
        <div id="carouselExampleFade" class="carousel slide carousel-fade carousel_${urlId} ">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="siderImg" src="../image/spritualimg1.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg" src="../image/spritualimg2.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img class="siderImg" src="../image/spritualimg3.png" class="d-block w-100" alt="...">
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
    } else if(urlId === 'thank'){
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
    }
}

export function pageImg(){
    let main_blocks = document.querySelector('.main__block')
    let url = window.location.href.toString();
    console.log(url)
    let urlId = open(url);
    console.log(urlId)
    let urlAdres = url.slice(-10, -10)
    console.log(urlAdres)
    let arrayValue = baseBlocks.baseBlocks[urlId]
    let array = arrayValue[0]
    let content_block = document.getElementById('content_block')
    let createTttile = document.createElement('div')
    content_block.innerHTML = ''
    let text = array.block.textContent
    content_block.classList.add(`${urlId}`)
    createTttile.classList.add(`title_block_${urlId}`)
    createTttile.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTttile.textContent = array.block.title
    if (urlId === 'service' ) {
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>       
             <img src="../image/serviceimg.png" class="img_${urlId}">
        </div>
        `
        }
    } else if(urlId === 'medical' ){
        for (let i in text) {
            // console.log(i, array[i].textContent)
            content_block.innerHTML += `
  <div class="images_${urlId}">   
                 <img src="../image/medical1.png" class="img_${urlId}">
                  <img src="../image/medical2.png" class="img_${urlId}">
              </div>
        </div>
        <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>    
        `
        }
    } else if(urlId === 'contacts' ){
        let maps = document.createElement('div')
            for (let i in text) {
                // console.log(i, array[i].textContent)
                content_block.innerHTML += `
    <div class="card_content_${urlId} itemcard_content" id="${i}">
            <div class="text_content_${urlId} itemcard">
                <a href="#" class="a_${urlId} itemHref" id="${text[i].id}" >
                    <div class="text_${urlId} itemtext">${text[i]}</div>
                </a>
            </div>       
        </div>
        `}
        maps.classList.add('maps')
        maps.id = 'maps'
            content_block.append(maps)
    }


}
let map;
let divMap = document.getElementById('maps');
console.log(divMap)
function maps(){
    map = new ymaps.Map(divMap, {
        center: [56.339831, 38.140545],
        zoom: 16
    });
}
ymaps.ready(maps);
