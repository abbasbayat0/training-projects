// type guards

const App = () => {
  // typeof
  // type Input = string | number;
  // const getInput = (input: Input): void => {
  //   if (typeof input === "string") console.log(input.toUpperCase());
  //   else console.log(input);
  // };
  // getInput("abbas")

  // equality
  // type User = { id: number; name: string; role: string };
  // type Student = { id: number; name: string; role: string };
  // const getData = (data: User | Student) => {
  //   if (data.role === "student") console.log("this is a student");
  //   else console.log(`this is ${data.role}`);
  // };
  // getData({ id: 2, name: "abbas", role: "student" });

  // property check
  // type Human = { name: string; family: string; getFullName: () => void };
  // type Animal = { name: string; walk: () => void };
  // type Mix = Human | Animal;
  // const getData = (data: Mix) => {
  //   if ("getFullName" in data) console.log("human");
  //   else console.log("animal");
  // };
  // getData({ name: "pishi", walk: () => {} });

  // truthy & falsy
  // type Input = number | null | undefined;
  // const getData = (input: Input): void => {
  //   if (input) console.log(input);
  //   else console.log("invalid input");
  // };
  // getData(12)

  // instanceof
  const fetchData = async () => {
    try {
      const response = await fetch("https://www.google.com");
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      else console.log(error);
    }
  };
  fetchData()
  return <div>App</div>;
};

export default App;
