let colorElements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');

let codeTexts = document.querySelectorAll('.box h1')


function randomCode() {

    let randomIndex = Math.floor(Math.random() * colorElements.length);

    let randomElement = colorElements[randomIndex];

    return randomElement;
    
}

function editBox1() {

    let one = randomCode();
    let two = randomCode();
    let three = randomCode();
    let four = randomCode();
    let five = randomCode();
    let six = randomCode();

    box1.style.backgroundColor  = `#${one}${two}${three}${four}${five}${six}`;

    let h1Element = document.querySelector('.box1 h1');

    h1Element.innerText = `#${one}${two}${three}${four}${five}${six}`


}

function editBox2() {

    let one = randomCode();
    let two = randomCode();
    let three = randomCode();
    let four = randomCode();
    let five = randomCode();
    let six = randomCode();

    box2.style.backgroundColor  = `#${one}${two}${three}${four}${five}${six}`;

    let h1Element = document.querySelector('.box2 h1');

    h1Element.innerText = `#${one}${two}${three}${four}${five}${six}`


}

function editBox3() {

    let one = randomCode();
    let two = randomCode();
    let three = randomCode();
    let four = randomCode();
    let five = randomCode();
    let six = randomCode();

    box3.style.backgroundColor  = `#${one}${two}${three}${four}${five}${six}`;

    let h1Element = document.querySelector('.box3 h1');

    h1Element.innerText = `#${one}${two}${three}${four}${five}${six}`


}

function editBox4() {

    let one = randomCode();
    let two = randomCode();
    let three = randomCode();
    let four = randomCode();
    let five = randomCode();
    let six = randomCode();

    box4.style.backgroundColor  = `#${one}${two}${three}${four}${five}${six}`;

    let h1Element = document.querySelector('.box4 h1');

    h1Element.innerText = `#${one}${two}${three}${four}${five}${six}`

   

}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        location.reload();
    }
});


function run() {
    editBox1();
    editBox2();
    editBox3();
    editBox4();

    for (let codeText of codeTexts) {
        codeText.addEventListener('click', function() {
            
            navigator.clipboard.writeText(codeText.innerText);

            codeText.innerText = 'KOPYALANDI'

        })
    }

}

run();