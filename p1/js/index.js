function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
testWebP(function (support) {
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
function showDialog() {
    document.querySelector("#dialog").style.display = 'flex';
}

function hideDialog() {
    document.querySelector("#dialog").style.display = 'none';
}

function createPost() {

}

function next() {

}

function createPost() {

}

function showEn() {
    document.querySelector("#slashEn").style.display = 'contents';
    document.querySelector("#eyeEn").style.display = 'none';
    document.querySelector("#enT").style.opacity = '0';
}

function showRu() {
    document.querySelector("#slashRu").style.display = 'contents';
    document.querySelector("#eyeRu").style.display = 'none';
    document.querySelector("#ruT").style.opacity = '0';
}

function hideEn() {
    document.querySelector("#eyeEn").style.display = 'contents';
    document.querySelector("#slashEn").style.display = 'none';
    document.querySelector("#enT").style.opacity = '1';
}

function hideRu() {
    document.querySelector("#eyeRu").style.display = 'contents';
    document.querySelector("#slashRu").style.display = 'none';
    document.querySelector("#ruT").style.opacity = '1';
}


const wordsEn = [
    "<p class='content__blocke'>1</p>",
    "<p class='content__blocke'>2</p>",
    "<p class='content__blocke'>3</p>",
];
const wordsRu = [
    "<p class='content__blockr'>a</p>",
    "<p class='content__blockr'>b</p>",
    "<p class='content__blockr'>c</p>",
];
let array = []
for (let i = 0; i < wordsEn.length; i++) {
    array.push(i);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
for (let i = 0; i < array.length; i++) {
    shuffle(array);
    array.join('');
}
let ijk = 0

function next() {
    if (ijk !== 0) {
        document.getElementsByClassName("content__blocke")[0].remove();
        document.getElementsByClassName("content__blockr")[0].remove();
    }
    const object = document.querySelector('#enT')
    const p = document.createElement("p")
    p.innerHTML = wordsEn[array[ijk]];
    object.append(p)
    const objectt = document.querySelector('#ruT')
    const pp = document.createElement("p")
    pp.innerHTML = wordsRu[array[ijk]];
    objectt.append(pp)
    ijk++
    if (ijk == array.length) {
        ijk = 0;
        document.getElementsByClassName("content__blocke")[0].remove();
        document.getElementsByClassName("content__blockr")[0].remove();
        next()
    }
};
next();