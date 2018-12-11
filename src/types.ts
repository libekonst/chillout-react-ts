export namespace RadioTypes {
  export interface Primitive {
    id?: string | number;
    name: string;
    source: string;
    image: string;
  }

  export interface Labelled extends Primitive {
    label: string;
  }

  export interface Signed extends Labelled {
    id: number;
  }
}
