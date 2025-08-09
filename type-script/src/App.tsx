const App = () => {
  enum UserRole {
    Admin,
    Manager,
    Employee,
  }
  type User = {
    id: number;
    name: string;
    role: UserRole;
    contact: [string, string];
  };

  const createUser = (user: User): User => {
    return user;
  };

  const user = createUser({
    id: 1,
    name: "abbas",
    role: UserRole.Admin,
    contact: ["", ""],
  });
  if(user.role === 0)console.log("hey")

  return <div>App</div>;
};

export default App;
