 /* PRIMITIVE TYPES */
    //string
let myName: string = 'Tanvir';
    //number
let year: number = 2022;
    //boolean
let isEnable: boolean;
isEnable = true;
    //null
let iamNull: null;
iamNull = 'hi! I accept only null. Hihi!';
    //undefined
let iamUndefined: undefined = undefined;
 //symbol are unique constant value

/* TypeScript Special types for special reasons */
    //any
let anyData: any = 'It can be anything';
anyData = 2000;
anyData = false;
    //unknown
let unknownData: unknown = "It's total unknown. Oh! my Allah.";
unknownData = 2302
unknownData = true;
    //never
let neverInMe: never;
neverInMe = "I'm never. I will not allow to assign any data. Eahoo..!!";


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