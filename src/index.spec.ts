import * as fs from 'fs';
import { writeCitiesToDist } from './index';

describe('writeCitiesToDist', () => {
    it('should write cities to file and check if it exists', async () => {
        const cities = [
            { title: 'Amsterdam', key: 123, categoryGroupId: 123 },
            { title: 'Rotterdam', key: 123, categoryGroupId: 123 },
            { title: 'Utrecht', key: 123, categoryGroupId: 123 },
        ];

        await writeCitiesToDist(cities);

        const fileExists = fs.existsSync('dist/cities.json');
        expect(fileExists).toBe(true);

        const fileContent = fs.readFileSync('dist/cities.json', 'utf-8');
        const parsedContent = JSON.parse(fileContent);
        expect(parsedContent).toEqual(cities);
    });
});
