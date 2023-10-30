import * as fs from 'fs';
import { City } from './types/city';
import { searchCity } from './search';

const FILE_PATH = 'dist/cities.json';

export const readCities = (): City[] => {
    const json = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(json) as City[];
};

export const searchOne = async (needle: string): Promise<{ item: City; refIndex: number }> => {
    return searchCity(readCities(), needle)[0];
};
export const search = async (needle: string): Promise<{ item: City; refIndex: number }[]> => {
    return searchCity(readCities(), needle);
};
searchOne('BERKEL').then((result) => {
    console.log(result);
});
