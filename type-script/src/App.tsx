const App = () => {
  interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    storage?: string;
    upgradeRam: (newRam: number) => number;
  }

  const myComputer: Computer = {
    id: 1,
    brand: "asus",
    ram: 8,
    upgradeRam: (newRam) => {
      return (myComputer.ram += newRam);
    },
  };

  myComputer.storage = "512 G";
  myComputer.upgradeRam(8);

  console.log(myComputer);
  return <div>App</div>;
};

export default App;
