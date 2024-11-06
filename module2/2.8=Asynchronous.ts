{
//basic promise

type Todo = {
    id : number;
    userId : number;
    title: string;
    completed : boolean;
}

const getTodo = async () : Promise<Todo> => {
   const res= await fetch('https://jsonplaceholder.typicode.com/todos/1');
   
   const data = await res.json();
   return data;
//    console.log({data});
}
getTodo();

type Something = {something : string};

//simulate
const createPromise = () : Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
        const data: Something = {something : "Something"};
        if(data) {
            resolve(data);
        }else {
            reject('failed to data')
        }
    })
}
//amra ei promise er exampele ta  boolean ba another data type diyeo korte pari number, obj etc




//calling create promise function

const showData = async () : Promise<Something> => {
    const data : Something = await createPromise();
    return data;
    // console.log(data);
}

showData();




//
}