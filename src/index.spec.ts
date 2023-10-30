import * as fs from 'fs';
import { getCitiesDataToJson } from './getCities';

describe('writeCitiesToDist', () => {
    it('should write cities to file and check if it exists', async () => {
        await getCitiesDataToJson();
        const fileExists = fs.existsSync('dist/cities.json');
        expect(fileExists).toBe(true);
    });
});
