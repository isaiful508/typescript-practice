{

    //destructuring

    //object destructure
    const user = {
        id: 508,
        name: {
            firstName: 'Saful',
            middleName: 'Islam',
            lastName: 'Molla'
        },
        mobile: '01742004508',
        address: 'Kadomtoli'
    }
    const { mobile,
        name: { middleName: midName }
    } = user;


    //array destructure

    const myFriends = ['Musaib', 'Sarah', 'Mukti', 'sabbir', 'aslam']
    const [,, wife, ...rest] = myFriends;





}