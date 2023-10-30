import { City } from './types/city';
import { searchCity } from './search';

import * as cities from './cities.json';

export const searchOne = async (needle: string): Promise<{ item: City; refIndex: number }> => {
    return searchCity(cities, needle)[0];
};
export const search = async (needle: string): Promise<{ item: City; refIndex: number }[]> => {
    return searchCity(cities, needle);
};
searchOne('BERKEL').then((result) => {
    console.log(result);
});
