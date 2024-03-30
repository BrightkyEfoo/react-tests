const Greet = ({ name, testId }: { name?: string; testId?: string }) => {
  if (name) return <h1 data-testid={testId}>Hello {name}</h1>;

  return <button data-testid={testId}>Login</button>;
};

export default Greet;
