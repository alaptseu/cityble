import { cityCountry } from './cityCountry'
// import { CityCoutry } from './cityInfo'


export function citiesByDayV2(d: Date) {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = weekday[d.getDay()];
    switch (day) {
        case 'Sunday':
            return citiesByLengthV2(4)
        case 'Monday':
            return citiesByLengthV2(5)
        case 'Tuesday':
            return citiesByLengthV2(6)
        case 'Wednesday':
            return citiesByLengthV2(7)
        case 'Thursday':
            return citiesByLengthV2(8)
        case 'Friday':
            return citiesByLengthV2(9)
        case 'Saturday':
            return citiesByLengthV2(10)
        default:
            return citiesByLengthV2(5)
    }
}

export function citiesByLengthV2(nameLength: number) {
    const cityMap = filterByLengthV2(nameLength);
    const citiesSet = cityMap.get(nameLength);
    if (citiesSet) {
        return Array.from(citiesSet);
    } else {
        return [];
    }
}

export function filterByLengthV2(min: number) {
    const filteredCities = cityCountry.map(c => c.city.toLocaleLowerCase().replace(/\s/g, ''))
        .filter((element) => element.length > 3);

    const cityMap = new Map<number, Set<string>>();
    filteredCities.forEach((city) => {
        let citySet = cityMap.get(city.length)
        if (!citySet) {
            let set = new Set<string>()
            set.add(city)
            cityMap.set(city.length, set);
        } else {
            citySet.add(city)
        }
    })
    return cityMap;
};

export function countryByCity(city: string) {
    return cityCountry.filter((element) => element.city.toUpperCase() === city)[0].country;
}

// export function citiesByDay(d: Date) {
//     const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = weekday[d.getDay()];
//     switch (day) {
//         case 'Sunday':
//             return citiesByLength(3)
//         case 'Monday':
//             return citiesByLength(4)
//         case 'Tuesday':
//             return citiesByLength(5)
//         case 'Wednesday':
//             return citiesByLength(6)
//         case 'Thursday':
//             return citiesByLength(7)
//         case 'Friday':
//             return citiesByLength(8)
//         case 'Saturday':
//             return citiesByLength(9)
//         default:
//             return citiesByLength(5)
//     }
// }

// export function citiesByLength(nameLength: number) {
//     const cityMap = filterByLength(nameLength);
//     const citiesSet = cityMap.get(nameLength);
//     if (citiesSet) {
//         return Array.from(citiesSet);
//     } else {
//         return [];
//     }
// }

// export function filterByLength(min: number) {
//     const filteredCities = cityData.map(c => c.toLocaleLowerCase().replace(/\s/g, ''))
//         .filter((element) => element.length > 3);

//     const cityMap = new Map<number, Set<string>>();
//     filteredCities.forEach((city) => {
//         let citySet = cityMap.get(city.length)
//         if (!citySet) {
//             let set = new Set<string>()
//             set.add(city)
//             cityMap.set(city.length, set);
//         } else {
//             citySet.add(city)
//         }
//     })
//     return cityMap;
// };