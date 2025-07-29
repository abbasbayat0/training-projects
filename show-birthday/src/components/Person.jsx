// get destructured keys from prop
const Person = ({ name, birth }) => {
  return (
    <section className="bg-green-300 p-3 rounded-2xl flex gap-3 justify-center items-center">
      <p>{name}:</p>
      <p className="text-sm">{birth}</p>
    </section>
  );
};

export default Person;
