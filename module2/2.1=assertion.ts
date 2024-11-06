{//

    //type assertion
    let anything: any;

    anything = "My name is Saiful";

    anything = 222;
    (anything as number) //type assertion


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value ${convertedValue}g`;
        } else if (typeof value === 'number') {
            return value * 1000;
        }
    }

    const result1 = kgToGm(20) as number;
    const result2 = kgToGm("10") as string;
    console.log({ result1 }, { result2 });

    type CustomError = {
        message: string;
    }

    try {

    } catch (err) {
        console.log((err as CustomError).message);
    }










    //
}