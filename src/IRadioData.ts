export interface ISignedRadioData {
  id: number;
  name: string;
  source: string;
  img: string;
  category: string;
}

export interface IPrimitiveRadioData {
  name: string;
  source: string;
  img: string;
  id: string;
}

export interface ILabelledRadioData extends IPrimitiveRadioData {
  category: string;
}
