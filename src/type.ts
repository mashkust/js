interface Valuet {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface ObjValuet {
  [key: string]: Valuet;
}

export interface Valuets {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: ObjValuet;
}

export interface IGenerateCard {
  valuets: Valuets;
  value: string;
}

export interface IGenerateTag {
  element: HTMLDivElement | HTMLSelectElement;
  text: string;
  key?: string;
}

export interface IGenerateOption {
  select: HTMLSelectElement;
  valute: ObjValuet;
}
