import { cityData } from './cityData'

export function citiesByLength(nameLength: number) {
    const cityMap = filterByLength(nameLength);
    const citiesSet = cityMap.get(nameLength);
    if (citiesSet) {
        return Array.from(citiesSet);
    } else {
        return [];
    }
}

export function filterByLength(min: number) {
    const filteredCities = cityData.map(c => c.toLocaleLowerCase())
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