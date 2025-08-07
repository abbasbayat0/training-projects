const App = () => {
  interface Person {
    name: string;
  }
  interface DogOwner extends Person {
    dogName: string;
  }
  interface Manager {
    managePeople: () => void;
    delegateTasks: () => void;
  }

  const getEmployee = (): Person | DogOwner | Manager => {
    const randomNumber = Math.random().toFixed(2);
    if (randomNumber < "0.33") {
      const newPerson: Person = { name: "abbas" };
      return newPerson;
    } else if (randomNumber < "0.66") {
      const newDogOwner: DogOwner = { name: "abbas", dogName: "rex" };
      return newDogOwner;
    }
    const manager: Manager = {
      managePeople: () => console.log("manage people"),
      delegateTasks: () => console.log("delegateTasks"),
    };
    return manager;
  };

  const employee: Person | DogOwner | Manager = getEmployee();
  const isManager = (obj: Person | DogOwner | Manager): obj is Manager => {
    return "managePeople" in obj;
  };

  if (isManager(employee)) {
    employee.delegateTasks()
  }
  return <div>App</div>;
};

export default App;
