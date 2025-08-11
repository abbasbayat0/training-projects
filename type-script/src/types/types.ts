export type Data = {
  id: number;
  title: string;
  isDone: boolean;
};

export type Store = {
  data: Data[];
  setData: (list: Data[]) => void;
  changeDone: (id: number) => void;
};

export type ItemProps = {
  data: Data;
  changeDone: (id: number) => void;
};

export type ListProps = {
  data: Data[];
  changeDone: (id: number) => void;
};
