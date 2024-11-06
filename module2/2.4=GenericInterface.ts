{
    //
    //generic interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike? : X,
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "saiful",
        computer: {
            brand: 'Hp',
            model: 'hp-22f',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Sara',
            model: 'kw66',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string,
        model: string,
        heartTrack: boolean,
        sleepTrack: boolean
    }

    interface Bike {
        model : string;
        engine: string;
    }

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: "Rich Dev",
        computer: {
            brand: 'Apple',
            model: 'Mac',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Apple',
            model: '',
            heartTrack: true,
            sleepTrack: true
        },
        bike : {
            model : 'Yamaha',
            engine: '150cc'
        }
    }





    //
}