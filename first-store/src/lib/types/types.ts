export type Store = {
  dark: boolean;
  setTheme: () => void;
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
