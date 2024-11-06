{
    //constraints

    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = 'Next Level Course'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        id: 2222,
        name: 'Saiful Islam',
        email: 'isaiful.islam508@gmail.com',
        deveType: 'NLWD'
    })

    const student3 = addCourseToStudent({
        id: 124,
        name: 'Saiful',
        email: 'isaiful.islam508@gmail.com',
        emni: 'emni'
    })

    const student2 = addCourseToStudent({
        id: 123,
        name: 'Saiful Islam',
        email: 'isaiful.islam508@yahoo.com',
        hasWatch: 'Apple'
    })









    //
}