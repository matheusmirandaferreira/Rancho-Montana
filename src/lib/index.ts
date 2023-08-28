export type ContentWrapperProps = {
  custonBackground?: 'white' | 'gray';
};

export type HorseCardProps = {
  uuidhorse: string;
  nmhorse: string;
  description: string;
  gender: string;
  birthdate: string;
  race: IRace;
  color: IColor;
  pace: IPace;
  category: ICategory;
  created_at: string;
  updated_at: string;
  image?: string;
};

type IColor = {
  uuidcolor: string;
  nmcolor: string;
  color_permalink: string;
};

type ICategory = {
  uuidcategory: string;
  nmcategory: string;
  category_permalink: string;
};

type IPace = {
  uuidpace: string;
  nmpace: string;
  pace_permalink: string;
};

type IRace = {
  uuidrace: string;
  nmrace: string;
  race_permalink: string;
};

export type ResponseProps<T> = {
  status: '00' | '01';
  message?: string;
  errors?: any;
  data: T;
};

export type LoaderProps = {
  height?: string | number;
  width?: string | number;
  color?: string;
  ariaLabel?: string;
  visible?: boolean;
};
