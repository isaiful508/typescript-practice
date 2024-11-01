{
//Learning Function
//Normal Function
//Arrow Function

function add(num1 : number,  num2 : number = 10) : number {
    return num1 + num2;
}

add(2,7);

const addArrowFunction = (num1 : number, num2: number) => num1 + num2;

//object --> function --> method

const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance: number) : string {
    return `My new Balance is : {$this.balance + balance}`
    }
}

const arr : number[] = [1, 2, 4, 10];

const newArray: number[] = arr.map((item: number) : number => item * item)

}