export type Store = {
  dark: boolean;
  activePage: string;
  setTheme: () => void;
  setActivePage: (newItem: string) => void;
};

export type Product = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    image: string;
    price: string;
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

export type SingleProduct = { params: { id: number } };
