const App = () => {
  // const x: any = 3.1415;
  // const y = (x as number).toFixed(2);
  // console.log(y);

  type MyInfo = {
    name: string;
    age: number;
  };
  const parsedInfo = JSON.parse(JSON.stringify({ name: "abbas", age: 22 }));
  const myName = (parsedInfo as MyInfo).name;
  console.log(myName);
  return <div>App</div>;
};

export default App;
