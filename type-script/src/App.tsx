const App = () => {
  try {
    console.log("first");
  } catch (error) {
    const e = error;
    if (e instanceof Error) console.log(e.message);
    else if (typeof e === "string") console.log(e.toLowerCase());
  }
  return <div>App</div>;
};

export default App;
