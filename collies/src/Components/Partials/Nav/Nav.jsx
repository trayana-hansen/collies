const NavArr = [
  "Forside",
  "Produkter",
  "Om os",
  "Ledige stillinger",
  "Kontakt os",
];

const Nav = () => {
  return (
    <div className="navbar">
    <ul>
      {NavArr.map((value, key) => {
        return <li key={key}>{value}</li>;
      })}
    </ul>
    </div>
  );
};

export { Nav };
