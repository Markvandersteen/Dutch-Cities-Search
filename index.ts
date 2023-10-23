import { searchCity } from './src';
import { CitiesFetcher, Fetcher } from './src/getCities';
import * as fs from 'fs';
import { City } from './src/types/city';

const FILE_PATH = 'dist/cities.json';

const writeCitiesToDist = async (cities: City[]) => {
    return fs.writeFileSync(FILE_PATH, JSON.stringify(cities), 'utf8');
};

const readCities = (): City[] => {
    const json = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(json) as City[];
};
export const updateCities = async (dataFetcher: Fetcher<City>) => {
    const cities = await dataFetcher.fetchData();
    writeCitiesToDist(cities);
};

export const search = async (needle: string, dataFetcher: Fetcher<City>) => {
    if (fs.existsSync(FILE_PATH)) {
        return searchCity(readCities(), needle)[0];
    }
    const haystack = await dataFetcher.fetchData();
    writeCitiesToDist(haystack);
    return searchCity(haystack, needle)[0];
};

console.log(search('asmterdam', new CitiesFetcher()));
