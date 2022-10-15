// type Inference means typeScript guessing about the type based on variable declaration if the type is not attached my the developer. It will not allow developer to change the guessing type after declaration.
let myName1 = 'Tanvir';
myName1 = 2022; // numeric data is not allow to reassign.

let year1 = 2022;
year1 = 'Tanvir' // string data is not allow to reassign.

let guests1 = ['Joe', 'Jeni', 'John', 22, true];
// guessing array of string, number, boolean data.
