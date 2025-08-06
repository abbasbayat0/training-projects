const App = () => {
  const processData = (
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
  ): string | number | undefined => {
    if (typeof input === "number") return input * input;
    else if (typeof input === "string" && config.reverse)
      return input.split("").reverse().join("");
    else if (typeof input === "string") return input.toUpperCase();
  };

  console.log(processData("abbas", { reverse: true }));
  return <div>App</div>;
};

export default App;
