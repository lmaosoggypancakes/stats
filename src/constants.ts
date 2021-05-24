export const HAS_KEY = <O>(obj: O, key: PropertyKey): key is keyof O => {
  return key in obj;
};
export const BASE_URL = "http://localhost:8000/";
