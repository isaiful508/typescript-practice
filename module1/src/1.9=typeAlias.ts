{
//Type elias

type Student = {
    name : string;
    age : number;
    contactNo?: number; 
    gender: string;
    address : string;
}

const student1 : Student= {
    name: 'Saiful',
    age: 26,
    gender : 'male',
    contactNo : 1742004508,
    address : 'Kamdomtoli'
}

const student2 : Student = {
    name: 'Saiful',
    age: 26,
    gender : 'male',
    address : 'Kamdomtoli'
}

type UserName= string;
type IsAdmin = boolean;
const userName: UserName = 'ashh';
const isAdmin : IsAdmin = true;

type Add = (x : number, y: number) => number;

const add : Add = (num1, num2) => num1 + num2;






//
}