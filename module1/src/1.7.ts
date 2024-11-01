{
    //spread operator
    //rest operator
    //destructuring
    

    //learning spread operator
    const bros1 : string[] = ['Tushar', 'Fahim0', 'Erfan'];
    const bros2 : string[] = ['Sabbir', 'Sohan', 'Enamul'];

    bros1.push(...bros2);

    const mentors1 = {
        typescript : 'Mezba',
        redux : 'Mir',
        dbms : 'Mizan'
    }

    const mentors2 = {
        prisma : 'Firoz',
        next : 'Tonmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    //learning rest operator

    const greetFriends = (...friends: string[]) => {
        // console.log(`Hi ${f1} ${f2} ${f3}`);

        friends.forEach(friend => {
            console.log(`Hi ${friend}`);
        });
    }

    greetFriends('Abul', 'Babul', 'Kabul')









}