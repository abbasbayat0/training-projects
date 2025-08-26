import { Dispatch, SetStateAction } from 'react';

export type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    image: string;
    price: string;
    colors: string[];
  };
};

export type ProductCart = {
  id: number;
  dark: boolean;
  attributes: {
    title: string;
    company: string;
    description: string;
    image: string;
    price: string;
  };
};

export type ShowIconMode = {
  showMode: boolean;
  setShowMode: Dispatch<SetStateAction<boolean>>;
};

export type SingleProduct = {
  id?: number;
  attributes?: {
    title: string;
    company: string;
    description: string;
    image: string;
    price: string;
    amount: number;
    colors: string[];
  };
};

export type CartProduct = {
  id: number;
  attributes: {
    title: string;
    company: string;
    image: string;
    price: string;
    amount: number;
    color: string;
  };
};