{
//
//union types 

// type FrontendDeveloper = 'fakibajDev' | 'juniorDev';

// const newDeveloper : FrontendDeveloper = 'juniorDev'

// type User = {
//     name : string;
//     email? : string;
//     gender: "male" | "female";
//     bloodGroup : "B+"| "A+"|"AB+";
// }

// const user1 : User = {
//     name: 'persian',
//     gender: 'male',
//     bloodGroup : "B+"
// }

//intersections

type FrontendDeveloper = {
    skills : string[];
    designation1 : 'Frontend Developer'
}

type BackendDeveloper = {
    skills : string[];
    designation2 : 'Backend Developer'
}

type FullStackDeveloper = FrontendDeveloper & BackendDeveloper ;

const fullStackDeveloper : FullStackDeveloper = {
    skills: ['SKILLS', 'CSS'],
    designation1 : 'Frontend Developer',
    designation2 : 'Backend Developer'
}

//
}