const App = () => {
  // type MyType = "typeOne" | "typeTwo";
  // const me = (type: MyType): void => {
  //   if (type === "typeOne") console.log("first");
  //   else if (type === "typeTwo") console.log("second");
  //type -> never
  // };
  enum X {
    Blue,
    Red,
  }

  const colorPicker = (color: X) => {
    switch (color) {
      case X.Blue:
        return "blue";
      case X.Red:
        return "red";

      default:
        const Y: never = X;

        throw new Error("mi");
    }
  };
  colorPicker(X.Blue);
  return <div>App</div>;
};

export default App;
