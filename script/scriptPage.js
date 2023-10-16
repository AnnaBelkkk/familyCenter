// function open(str, a ='='){
//     let res = str.substring(str.lastIndexOf(a)+1)
//     return res != str ? res: false;
// }
// let url = window.location.href.toString();
// console.log(url)
// let urlId = open(url);
// console.log(urlId)
// let urlAdres = url.slice(-10,-10)
// console.log(urlAdres)

function back(){
    history.back();
}
let isVisuallyEnabled = false;
let visually = document.getElementById('visually')
visually.addEventListener('click', function (){
    let main__block_one = document.querySelector('.main__block_one')
    let main__block_two = document.querySelector('.main__block_two')
    let main__block_three = document.querySelector('.main__block_three')
    let main__block_four = document.querySelector('.main__block_four')
    let text_block = document.querySelector('.text_block')
    let text_block_two = document.querySelector('.text_block_two')
    let text_block_three = document.querySelector('.text_block_three')
    let block_text_four = document.querySelector('.block_text_four')
    let visually_text = document.querySelector('.visually_text')
    let title_nav = document.querySelector('.title_nav')
    let input_search = document.querySelector('.input_search::placeholder')
    isVisuallyEnabled = !isVisuallyEnabled;
    if (isVisuallyEnabled) {
        document.body.style.fontSize = '';
        main__block_one.style.fontSize = '' ;
        // Настройка цветовой схемы
        document.body.style.backgroundColor = '';
        main__block_one.style.backgroundColor = '';
        main__block_two.style.backgroundColor = '';
        main__block_three.style.backgroundColor = '';
        main__block_four.style.backgroundColor = '';
        text_block.style.fontSize = '';
        text_block_two.style.fontSize = '';
        text_block_three.style.fontSize = '';
        block_text_four.style.fontSize = '';
        visually_text.style.fontSize = ''
        title_nav.style.fontSize = ''
        input_search.style.fontSize=''
        document.body.style.color = '';
    } else {
        document.body.style.fontSize = '1.2rem';
        main__block_one.style.fontSize = '50px';
        // Настройка цветовой схемы
        document.body.style.backgroundColor = 'black';
        main__block_one.style.backgroundColor = 'black';
        main__block_two.style.backgroundColor = 'black';
        main__block_three.style.backgroundColor = 'black';
        main__block_four.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        text_block.style.fontSize = '25px';
        text_block_two.style.fontSize = '25px';
        text_block_three.style.fontSize = '25px';
        block_text_four.style.fontSize = '25px';
        visually_text.style.fontSize = '20px'
        title_nav.style.fontSize = '20px'
        input_search.style.fontSize='20px'
    }
})