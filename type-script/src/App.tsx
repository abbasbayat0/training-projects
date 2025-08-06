const App = () => {
  const processInput = (parameter: string | number) => {
    if (typeof parameter === "number") console.log(parameter * 2);
    else if (typeof parameter === "string")
      console.log(parameter.toUpperCase());
  };
  processInput("abbas");

  const rest = (...numbers: number[]) => {
    console.log(numbers);
  };
  rest(1, 2, 3, 4, 5);
  return <div>App</div>;
};

export default App;
