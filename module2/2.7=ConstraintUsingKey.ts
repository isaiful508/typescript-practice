{
//generic constraints with keyof operator

type Vehicle = {
    bike : string;
    car : string;
    ship : string;
}


type Owner = "bike" | "car" | "ship" //manually

//key of vehicle er type diye ekat dynamic unioun type gothon kora hobe

type Owner2 = keyof Vehicle

const getProperty = <X, Y> (obj:X , key: Y extends keyof X)=> {
    return obj[key];
}


const user = {
    name : 'Saifl',
    age : 26,
    address : 'kf'
}

const car = {
    model : 'Alion',
    year : 2020,
}

const result1 = getProperty(car, 'model');



// user['age']

//
}