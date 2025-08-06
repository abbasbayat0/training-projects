const App = () => {
  const sayHi = (name: string): string => {
    // console.log(name)
    return `hi ${name}`;
  };
  console.log(sayHi("abbas"));

  const names: string[] = ["abbas", "ahmad", "hassan", "saleh"];

  const checkIsNameInNames = (name: string): boolean => {
    // for (const item of names) {
    //   if (item === name) {
    //     console.log(item);
    //     return true;
    //   }
    // }
    // return false;

    return names.includes(name);
  };
  // console.log(checkIsNameInNames("abbas"));
  const name: string = "hassan";
  if (checkIsNameInNames(name)) console.log(`${name} is in names`);
  else console.log(`${name} is not in names`);

  return <div>App</div>;
};

export default App;
