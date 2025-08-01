// import { useEffect, useState } from "react";
// import { useEffect } from "react";
// import globalAxios from "./global";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import Test from "./Test";

// const url = import.meta.env.VITE_URL;
const App = () => {
  // const { mutate } = useMutation({
  //   mutationFn: () =>
  //     globalAxios.post("/people", {
  //       id: 20,
  //       name: "abbas",
  //       age: 22,
  //       job: "freelancer",
  //     }),
  //   onSuccess: () => console.log("done"),
  //   onError: (e) => console.log(`error is ${e.message}`),
  // });
  // useEffect(() => {
  //   mutate();
  // }, []);

  // const query = useQueryClient();
  // const revalidate = () => {
  //   query.invalidateQueries({ queryKey: "people" });
  // };
  // const [people, setPeople] = useState();
  // const { data, isLoading, isError, error } = useQuery({
  //   queryKey: ["people"],
  //   queryFn: () => globalAxios("/people"),
  // });

  // const fetchPeople = async () => {
  //   try {
  //     const response = await globalAxios("/people");
  //     setPeople(response.data);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // useEffect(() => {
  //   fetchPeople();
  // }, []);
  // console.log(people);
  // if (isLoading) return <p style={{ color: "white" }}>loading...</p>;
  // if (isError) return <p style={{ color: "white" }}>{error.message}</p>;
  // console.log(data);

  return <Test />
};

export default App;
