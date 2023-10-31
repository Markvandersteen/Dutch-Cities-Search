import { City } from "./types/city";
import { writeFileSync } from "fs";

const FILE_PATH = "src/cities.json";

export const getCitiesDataToJson = async (): Promise<void> => {
  const response = await fetch(
    "https://opendata.cbs.nl/ODataApi/OData/85516NED/Woonplaatsen",
  );
  const json = await response.json();
  const mappedJson = json.value.map((city: any): City => {
    return {
      key: city.Key,
      title: city.Title,
    };
  });
  writeFileSync(FILE_PATH, JSON.stringify(mappedJson), "utf8");
};
getCitiesDataToJson();
