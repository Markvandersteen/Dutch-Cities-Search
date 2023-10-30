import * as fs from 'fs';
import { getCitiesDataToJson } from './getCities';

describe('writeCitiesToDist', () => {
    it('should write cities to file and check if it exists', async () => {
        const cities = [
            { title: 'Amsterdam', key: 123, categoryGroupId: 123 },
            { title: 'Rotterdam', key: 123, categoryGroupId: 123 },
            { title: 'Utrecht', key: 123, categoryGroupId: 123 },
        ];
        await getCitiesDataToJson();
        const fileExists = fs.existsSync('dist/cities.json');
        expect(fileExists).toBe(true);
    });
});
