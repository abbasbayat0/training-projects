import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import globalAxios from "./global";

const Test = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["people"],
    queryFn: async () => {
      const { data } = await globalAxios.get("/people");
      return data;
    },
  });

  const queryClient = useQueryClient();
  const { mutate: addAbbas } = useMutation({
    mutationFn: async () =>
      await globalAxios.post("/people", {
        id: 20,
        name: "abbas",
        age: 22,
        job: "freelancer",
        goodPerson: false,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["people"] });
    },
  });

  const { mutate: toggle } = useMutation({
    mutationFn: async (id) => {
      await globalAxios.patch(`/people/${id}`, { goodPerson: true });
    },
  });

  if (isLoading) return <p style={{ color: "white" }}>loading ...</p>;
  return (
    <div>
      {data.map((person) => {
        return (
          <p
            key={person.id}
            style={{ color: "white" }}
            onClick={() =>
              toggle(person.id, { onSuccess: console.log("done") })
            }
          >
            {person.name}
          </p>
        );
      })}
      <button onClick={addAbbas}>add</button>
    </div>
  );
};

export default Test;
