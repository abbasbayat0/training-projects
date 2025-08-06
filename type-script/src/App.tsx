const App = () => {
  let orderStatus: "processing" | "delivered" | "shipped" = "processing";
  orderStatus = "delivered";

  console.log(orderStatus);

  let discount: number | string = 20;
  discount = "20%";

  console.log(discount);

  return <div>App</div>;
};

export default App;
