export function Name({ name, age = 30, isProgrammer }) {
  console.log(isProgrammer);
  return (
    <div>
      <h1>
        {name} {age}
      </h1>
      {/* <h1>Anuragh</h1> */}
    </div>
  );
}
