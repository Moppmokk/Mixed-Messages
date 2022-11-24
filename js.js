const array0 = ['The world is ', 'Capitalism is ', 'Your attitude is ', 'Beloved christmas carrols are', 'The richest of the rich are ', 'Dinosaurs are', 'Every kind of religion is', 'Spray cream is '];
const array1 = ['the source of ', 'like a big stage for ', 'a perfect setting for ', 'the butter on top of ', 'like uranium on the cheeks of', 'as dangerous as ', 'like a streetcar crushing ', 'a handful of poop on the face of '];
const array2 = ['failure.', "the worlds's end.", 'euphoria.', 'depression.', 'a new hope', 'an unneeded Star Wars Sequel.', 'manic laughter.', 'all evil.'];
let counter = 0;

const roll = () => {
    set0();
    if (counter === 0) {
        letsGo();
    } else {
        setTimeout(letsGo, 1000); 
    }
}

const set0 = () => {
    for (let i = 0; i < 3; i++) {
        let codeword1 = 'result';
        let codewordFinal = codeword1.concat("", i);    
        document.getElementById(codewordFinal).style.top = 0;
    }
};

const letsGo = () => {
    go(array0, 0);
    go(array1, 1);
    go(array2, 2);
}

const go = (array, index) => {
    counter += 1;

    // shuffle
    for (let i = 0; i < array.length; i++) {
        let saver = array[i];
        let randomNum = Math.floor(Math.random() * array.length);
        array.splice(i, 1);
        array.splice(randomNum, 0, saver)
    }

    // adjust appearance
    let displayedArray = [];
    for (let item of array) {
        displayedArray.push(item);
        displayedArray.push("<br />");
      };

    // display
    let codeword1 = 'result';
    let codewordFinal = codeword1.concat("", index);
    document.getElementById(codewordFinal).innerHTML = displayedArray.join(" ");
    document.getElementById(codewordFinal).style.top = `-${displayedArray.length * 14}px`;

}