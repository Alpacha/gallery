let model = require('../gallery.json');
// console.log(model.model[7].alt)

// VARIANT ONE
let arrayLength = model.length;
for (let i = 0; i < arrayLength; i++) {
    console.log(model.model[i]);
}

// VARIANT TWO
let index;
for (index = 0; index < model.length; index++) {
    console.log(model[index]);
}
