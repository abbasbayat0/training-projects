const App = () => {
  type Employee = { id: number; name: string; department: string };
  type Manager = { id: number; name: string; employees: Employee[] };
  type Staff = Employee | Manager;

  const PrintStafDetail = (input: Staff): void => {
    if ("employees" in input) {
      console.log(
        `${input.name} is a manager with ${input.employees.length} of employees`
      );
    } else {
      console.log(
        `${input.name} is an employee in ${input.department} department`
      );
    }
  };

  const ahmad: Employee = { id: 1, name: "ahmad", department: "one" };
  const saleh: Employee = { id: 2, name: "saleh", department: "two" };
  const hassan: Employee = { id: 3, name: "hassan", department: "three" };
  const amir: Employee & { age: number } = {
    id: 4,
    name: "amir",
    age: 21,
    department: "four",
  };

  const abbas: Manager = {
    id: 1,
    name: "abbas",
    employees: [ahmad, saleh, hassan, amir],
  };

  PrintStafDetail(abbas);

  return <div>App</div>;
};

export default App;
