type UserShape = {
  name: string;
  age: number;
};

const User = ({ name, age }: UserShape) => {
  return (
    <main>
      <h1>{name}</h1>
      <h1>{age}</h1>
    </main>
  );
};

export default User;
