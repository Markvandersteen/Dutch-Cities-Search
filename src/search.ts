import Fuse from "fuse.js";
import type { FuseResult } from "fuse.js";

import { City } from "./types/city";
import cityData from "./cities.json";

export const searchCity = (input: string): FuseResult<City>[] => {
  const fuse = new Fuse(cityData, {
    keys: ["title"],
  });
  return fuse.search(input);
};
