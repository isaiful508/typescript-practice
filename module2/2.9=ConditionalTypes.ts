{
//Condition types
type a1 = null;
type a2 = undefined;


type x = a1 extends null ? true : false  //conditional type


type y = a1 extends null ? true : b1 extends undefined ? undefined : any  //conditional type


type Sheikh = {
    bike : string;
    car : string;
    ship : string
}

//key of sheikh "bike"  | "car" | "ship"


//car ase kina bike ase kina 
type CheckVehicle<T> = T extends keyof Sheikh? true : false

type HasBike = CheckVehicle<"car">



//
}