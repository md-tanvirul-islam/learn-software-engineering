 /* PRIMITIVE TYPES */
 //string
let myName: string = 'Tanvir';
 //number
let year: number = 2022;
 //boolean
let isEnable: boolean;
isEnable = true;
 //null
 //undefined
 //symbol are unique constant value

/* OBJECT TYPES */
// array
let guests: string[] = ['Joe', 'Jeni', 'John'];
// objects

// classes

//types for function
let killBill: (name: string) => string;
killBill = function (name) {
    return name.toUpperCase();
}

const billKill = function (name: string): string {
    return name.toLowerCase();
}