import { radios } from './old-data';
import { ISignedRadioData, IPrimitiveRadioData, ILabelledRadioData } from './IRadioData';

const sign = (obj: object, i: number) => ({ ...obj, id: i } as ISignedRadioData);

const mergeArrays = (sum: any[], step: any[]) => [...sum, ...step];

const getDataWithLabel = (arr: IPrimitiveRadioData[], label: string) =>
  arr.map(obj => ({ ...obj, label: label }));

const preparedData: ISignedRadioData[] = Object.keys(radios)
  .map(key => getDataWithLabel(radios[key], key))
  .reduce(mergeArrays)
  .map(sign);

export default preparedData;
