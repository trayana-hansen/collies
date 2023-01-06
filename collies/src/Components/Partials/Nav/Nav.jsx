const NavArr = [
  "Forside",
  "Produkter",
  "Om os",
  "Ledige stillinger",
  "Kontakt os",
];

const Nav = () => {
  return (
    
    <ul>
      {NavArr.map((value, key) => {
        return <li key={key}>{value}</li>;
      })}
    </ul>

  );
};

export { Nav };
