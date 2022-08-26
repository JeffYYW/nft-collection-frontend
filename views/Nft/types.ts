export interface INFTObject {
  description: string;
  image: string;
  name: string;
  attributes: ITokenAttributes[];
}

interface ITokenAttributes {
  trait_type: string;
  value: string;
}
