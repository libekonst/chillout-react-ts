export namespace RadioTypes {
  export interface Primitive {
    id: string | number;
    name: string;
    source: string;
    img: string;
  }

  export interface Labelled extends Primitive {
    label: string;
  }

  export interface Signed extends Primitive {
    label: string;
    id: number;
  }
}
