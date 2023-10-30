import { City } from "./types/city";
import { searchCity } from "./search";

export const searchOne = (needle: string): { item: City; refIndex: number } => {
  return searchCity(needle)[0];
};
export const search = (needle: string): { item: City; refIndex: number }[] => {
  return searchCity(needle);
};
