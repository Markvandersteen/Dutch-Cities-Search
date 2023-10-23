import { City } from './types/city';

export interface Fetcher<T> {
    fetchData: () => Promise<T[]>;
}
export class CitiesFetcher implements Fetcher<City> {
    async fetchData(): Promise<City[]> {
        const response = await fetch(
            'https://opendata.cbs.nl/ODataApi/OData/85516NED/Woonplaatsen'
        );
        const json = await response.json();

        return json.value.map((city: any): City => {
            return {
                key: city.Key,
                title: city.Title,
                categoryGroupId: city.CategoryGroupID,
            };
        }) as City[];
    }
}
