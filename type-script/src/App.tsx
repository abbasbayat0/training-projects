const App = () => {
  // let names: string[] = ["abbas", "ahmad"];
  // const info: (string | number)[] = ["abbas", 22, "ahmad", 22, "saleh", 21];
  // console.log(info)

  const items: { title: string; cost?: number }[] = [
    { title: "hello", cost: 20 },
    { title: "bye" },
  ];
  console.log(items);

  const numbers: readonly number[] = [1, 2, 3, 4, 5];
  // numbers.push(6)
  console.log(numbers);

  return <div>App</div>;
};

export default App;
