//функция для получения значения из адресной строки
export function open(str, a = '=') {
    let res = str.substring(str.lastIndexOf(a) + 1)
    return res != str ? res : false;
}
//получение данных из адресной строки
let url = window.location.href.toString();
let urlId = open(url);
let urlAdres = url.slice(-10, -10)

//смена текста и айди в выпадающем меню для отрисованных страниц
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
export {url, urlId, urlAdres}

//функция для  верстки страницы новостей, так как она содержит в себе иное построение блоков в json и получение данных
export function pageStandart(arrayValue, array, main_blocks) {
    main_blocks.innerHTML = ''
    main_blocks.classList.add(`${urlId}`)
    for (let i in array) {
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

//функция для всех страниц, с проверкой того нужна ли картинка на сайте или нет, если да, то сколько блоков с изображениями, функция содержит еще условия так, как некоторые страницы имеют дополнительные параметры или построение
export function pageImgText(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img) {
    content_block.innerHTML = ''
    content_block.classList.add(`${urlId}`)
    createTitle.classList.add(`title_block_${urlId}`)
    createTitle.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTitle.classList.add('itemtitlebefore')
    if (array.block !== undefined) {
        createTitle.textContent = array.block.title
    }
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
    //console.log(itemcard_content)
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
    if (urlId === 'intelligence') {
        let aId = document.querySelectorAll('.a_intelligence')
        let arrayBlocks = ['base', 'structure', 'documents', 'educations', 'educationStandart', 'teacher', 'security', 'scholarship', 'available', 'international']
        for (const [index, element] of aId.entries()) {
            element.id = arrayBlocks[index];
            element.href = `../pageTransition/index.html?=${arrayBlocks[index]}`
        }
    } else if (urlId === 'contacts') {
        let imagesCardContact = document.createElement('div')
        imagesCardContact.classList.add('images_contacts')
        content_block.append(imagesCardContact)
        let images_contacts = document.querySelector('.images_contacts')
        images_contacts.innerHTML = ''
        let map;
//функция для отрисовки карты на странице
        function maps() {
            map = new ymaps.Map(images_contacts, {
                center: [56.339831, 38.140545],
                zoom: 16
            });
        }

        ymaps.ready(maps);
    } else if (['base', 'structure', 'documents', 'educations', 'educationStandart', 'teacher', 'security', 'scholarship', 'available', 'international', 'education'].includes(urlId)) {
        let itemtitlebefore = document.getElementById(`${urlId}`)
        let arrowImgBtn = document.createElement('button')
        arrowImgBtn.classList.add('arrow_back')
        let arrowImg = document.createElement('img')
        arrowImgBtn.append(arrowImg)
        arrowImg.src = '../img/arrowBack.png'
        arrowImg.classList.add('imgArrowBack')
        itemtitlebefore.append(arrowImgBtn)
        arrowImgBtn.addEventListener('click', e => {
            history.back()
        })
    }
}
//функция для слайдеров, разделена по условиям так, как это кастомный слайдер, с bootstrap, менять его полностью проблематично
export function pageSlider(main_blocks, arrayValue, content_block, createTitle, array, count, blocks, text, img) {
    content_block.innerHTML = ''
    // let text = array.block.textContent
    content_block.classList.add(`${urlId}`)
    createTitle.classList.add(`title_block_${urlId}`)
    createTitle.id = urlId
    main_blocks.classList.add(`main_${urlId}`)
    createTitle.classList.add('itemtitlebefore')

    // createTitle.textContent = array.block.title
    if (array.block !== undefined) {
        createTitle.textContent = array.block.title
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
    } else if (urlId === 'available') {
        for (let i in text) {
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
    } else if (urlId === 'thank') {
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
    if (urlId === 'available') {
        let itemtitlebefore = document.getElementById(`${urlId}`)
        let arrowImgBtn = document.createElement('button')
        arrowImgBtn.classList.add('arrow_back')
        let arrowImg = document.createElement('img')
        arrowImgBtn.append(arrowImg)
        arrowImg.src = '../img/arrowBack.png'
        arrowImg.classList.add('imgArrowBack')
        itemtitlebefore.append(arrowImgBtn)
        arrowImgBtn.addEventListener('click', e => {
            history.back()
        })
    }
}

//функция для дополнительных ссылок
function linksPdf(urlId) {
    let text_itemtext = document.querySelectorAll('.itemtext')
    let count = 1;
    for (const element of text_itemtext) {
        if (element.textContent.includes('●')) {
            if (['documents','educations','educationStandart','teacher','security','organization','education','social'].includes(urlId)) {
                element.parentNode.style.textDecoration = 'underline'
                element.parentNode.style.color = 'white'
                element.parentNode.href = `../pdf/${urlId}/${urlId}${count}.pdf`
                count++
            }
        } else{
            console.log('нет ссылки')
        }
    }
}

linksPdf(urlId)

