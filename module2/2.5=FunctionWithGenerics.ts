{
    //
    //function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh');

    const res2 = createArrayWithGeneric<string>('Bangladesh');



    type User {
        id: number;
        name: string
    }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mukti Akter'
    })



    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res12 = createArrayWithTuple<string, number>('Bangladesh', 555);

    const res22 = createArrayWithTuple<string,{name : string}>('Bangladesh', {
        name : 'asia'
    });



    type User {
        id: number;
        name: string
    }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mukti Akter'
    })



const addCourseToStudent = <T> (student  : T) => {
    const course = 'Next Level Course'

    return {
        ...student,
        course
    }
}

const student1 = addCourseToStudent ({
    name : 'Saiful Islam',
    email : 'isaiful.islam508@gmail.com', deveType : 'NLWD'
})

const student2 = addCourseToStudent ({
    name : 'Saiful Islam',
    email : 'isaiful.islam508@yahoo.com', hasWatch: 'Apple'
})


    //
}