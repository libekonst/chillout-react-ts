import { radios } from './old-data';

const getDataWithType = (arr: object[], category: string): object[] =>
  arr.map(obj => ({ ...obj, type: category }));

const formattedData = Object.keys(radios)
  .map(key => getDataWithType(radios[key], key))
  .reduce((sum, step) => [...sum, ...step])
  .map((obj, i) => ({ ...obj, id: i }));

export default formattedData;
