import Fuse from 'fuse.js';
import { City } from './types/city';

export const searchCity = (cities: City[], input: string) => {
    const fuse = new Fuse(cities, {
        keys: ['title'],
    });
    return fuse.search(input);
};
