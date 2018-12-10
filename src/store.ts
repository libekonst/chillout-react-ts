import { radios } from './old-data';
import { RadioTypes } from './types';

const withLabel = (arr: RadioTypes.Primitive[], label: string): RadioTypes.Labelled[] =>
  arr.map(obj => ({ ...obj, label: label }));

const flatten = (sum: any[], step: any[]) => [...sum, ...step];

const sign = (obj: RadioTypes.Labelled, i: number): RadioTypes.Signed => {
  return { ...obj, id: i };
};

const preparedData: RadioTypes.Signed[] = Object.keys(radios)
  .map(key => withLabel(radios[key], key))
  .reduce(flatten)
  .map(sign);

export default preparedData;
