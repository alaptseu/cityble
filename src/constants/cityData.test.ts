import { fail } from 'assert'
import { filterByLength, citiesByLengthV2 } from './cities'

describe('cityData', () => {
    test('words are unique', () => {

        // const cityMap = sortByLength();
        // console.log(cityMap.get(6))
        // Array.from(cityMap.entries()).forEach(entry => console.log('Length: ' + entry[0] + ' Value: ' + entry[1].size));

        // const cityByPopulationMap = filterByPopulation(300000);

        // Array.from(cityByPopulationMap.entries()).forEach(entry => console.log('Length: ' + entry[0] + ' Value: ' + entry[1].size));

        // cityByPopulationMap.get(5)?.forEach(entry => console.log('city: ' + entry));
        // console.log(citiesByPopulation(300000, 5));
        const array = citiesByLengthV2(5);

        console.log(array.length);
        // console.log(array);


        //   const uniqueWords = Array.from(new Set(WORDS))

        //   expect(WORDS.length).toEqual(uniqueWords.length)

        //   if (uniqueWords.length !== WORDS.length) {
        //     uniqueWords.forEach((w) => {
        //       const ww = WORDS.filter((x) => x === w)
        //       if (ww.length > 1) {
        //         fail(`The word ${w} is not unique.`)
        //       }
        //     })
        //   }

    })

})
