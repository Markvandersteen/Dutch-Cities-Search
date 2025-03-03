import * as fs from "fs";
import { getCitiesDataToJson } from "./getCities";
import { search } from "./index";
describe("writeCitiesToDist", () => {
  it("should write cities to file and check if it exists", async () => {
    await getCitiesDataToJson();
    const fileExists = fs.existsSync("src/cities.json");
    expect(fileExists).toBe(true);
  });
});

describe("search", () => {
  it("should return an empty array when no cities match the search term", () => {
    const result = search("nonexistent city");
    expect(result).toEqual([]);
  });

  //This tests also lets me know when anything changes on fuse their side
  it("should return an array of matching cities and their indices", () => {
    const result = search("amsterdam").slice(0, 2);

    expect(result).toEqual([
      {
        item: { key: "WP3594", title: "Amsterdam" },
        refIndex: 67,
      },
      {
        item: {
          key: "WP3569",
          title: "Amsterdam-Duivendrecht",
        },
        refIndex: 68,
      },
    ]);
  });
});
